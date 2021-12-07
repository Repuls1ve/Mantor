import { Component } from '@angular/core';

@Component({
  selector: 'app-warranty',
  templateUrl: './warranty.component.html',
  styleUrls: ['./warranty.component.scss']
})
export class WarrantyComponent {
  blurActive = false
  
  onSidebarToggle(opened: boolean) {
    this.blurActive = opened
  }
}
