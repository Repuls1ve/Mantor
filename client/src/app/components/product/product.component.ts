import { Component, Input, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { IProduct } from 'src/app/models/product.model';
import { productSorted } from 'src/app/pages/catalog/catalog.component';

export type vendorSorted = {
  vendor: IProduct['vendor']
  products: IProduct[]
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  vendorSorted: vendorSorted[] = []
  @Input() title?: IProduct['title']
  @Input() product!: productSorted

  constructor(public media: MediaObserver) {}

  ngOnInit(): void {
    this.product.items.forEach(item => {
      !this.vendorSorted.some(value => value.vendor.name === item.vendor.name)
      &&
      this.vendorSorted.push({
        vendor: item.vendor,
        products: this.product.items.filter(v => v.vendor.name === item.vendor.name)
      })
    })
  }
}
