import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { HomeComponent } from './pages/home/home.component';
import { PartnershipComponent } from './pages/partnership/partnership.component';
import { ServiceCentersComponent } from './pages/service-centers/service-centers.component';
import { ShopsComponent } from './pages/shops/shops.component';
import { WarrantyComponent } from './pages/warranty/warranty.component';

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
    path: 'shops',
    component: ShopsComponent
  },
  {
    path: 'service-centers',
    component: ServiceCentersComponent
  },
  {
    path: 'warranty',
    component: WarrantyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
