import { Component, OnInit } from '@angular/core';
import { IShop } from 'src/app/models/shop.model';
import { ShopsService } from 'src/app/services/shops.service';

export type shopsSorted = {
  city: IShop['address']['city']
  shops: IShop[]
} 

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.scss']
})
export class ShopsComponent implements OnInit {
  sortedShops: shopsSorted[] = []
  shops: IShop[] = []
  blurActive = false

  constructor(private readonly shopsService: ShopsService) {}

  ngOnInit(): void {
    this.shopsService.getShops().subscribe(shops => {
      this.shops = shops
      shops.forEach(shop => {
        !this.sortedShops.some(item => item.city === shop.address.city)
        &&
        this.sortedShops.push({
          city: shop.address.city,
          shops: shops.filter(item => item.address.city === shop.address.city)
        })
      })
    })
  }

  onSidebarToggle(opened: boolean): void {
    this.blurActive = opened
  }
}