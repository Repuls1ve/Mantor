import { Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { IProduct } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

export type productSorted = {
  title: IProduct['title']
  items: IProduct[]
}

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  sortedProducts: productSorted[] = []
  blurActive = false

  constructor(
    private readonly productsService: ProductsService,
    public media: MediaObserver
  ) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(products => {
      products.forEach(product => {
        !this.sortedProducts.some(item => item.title === product.title)
        &&
        this.sortedProducts.push({
          title: product.title,
          items: products.filter(item => item.title === product.title)
        })
      })
    })
  }

  onSidebarToggle(opened: boolean): void {
    this.blurActive = opened
  }
}
