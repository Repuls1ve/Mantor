import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductComponent } from './components/product/product.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { PartnershipComponent } from './pages/partnership/partnership.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { InputComponent } from './components/input/input.component';
import { ShopsComponent } from './pages/shops/shops.component';
import { AgmCoreModule } from '@agm/core';
import { environment } from 'src/environments/environment';
import { ShopComponent } from './components/shop/shop.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent,
    ProductComponent,
    CatalogComponent,
    PartnershipComponent,
    FeedbackComponent,
    InputComponent,
    ShopsComponent,
    ShopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: `${environment.mapApi}`
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
