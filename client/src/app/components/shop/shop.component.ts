import { Component, Input } from '@angular/core';
import { IShop } from 'src/app/models/shop.model';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {
  @Input() shop!: IShop
}
