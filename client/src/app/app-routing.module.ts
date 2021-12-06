import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { HomeComponent } from './pages/home/home.component';
import { PartnershipComponent } from './pages/partnership/partnership.component';
import { ShopsComponent } from './pages/shops/shops.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'catalog',
    component: CatalogComponent
  },
  {
    path: 'partnership',
    component: PartnershipComponent
  },
  {
    path: 'where-to-buy',
    component: ShopsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
