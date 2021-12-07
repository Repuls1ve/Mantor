import { Component, OnInit } from '@angular/core';
import { IServiceCenter } from 'src/app/models/service-center.model';
import { CentersService } from 'src/app/services/centers.service';

export type centersSorted = {
  city: IServiceCenter['address']['city']
  centers: IServiceCenter[]
}

@Component({
  selector: 'app-service-centers',
  templateUrl: './service-centers.component.html',
  styleUrls: ['./service-centers.component.scss']
})
export class ServiceCentersComponent implements OnInit {
  sortedCenters: centersSorted[] = []
  centers: IServiceCenter[] = []
  blurActive = false
  
  constructor(private readonly centersService: CentersService) {}

  ngOnInit(): void {
    this.centersService.getCenters().subscribe(centers => {
      this.centers = centers
      centers.forEach(center => {
        !this.sortedCenters.some(item => item.city === center.address.city)
        &&
        this.sortedCenters.push({
          city: center.address.city,
          centers: centers.filter(item => item.address.city === center.address.city)
        })
      })
    })
  }

  onSidebarToggle(opened: boolean) {
    this.blurActive = opened
  }
}
