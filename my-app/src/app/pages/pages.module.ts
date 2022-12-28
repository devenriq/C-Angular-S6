import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FeaturesComponent } from './features/features.component';
import { HomeComponent } from './home/home.component';
import { PricingComponent } from './pricing/pricing.component';



@NgModule({
  declarations: [NavbarComponent, HomeComponent, FeaturesComponent,PricingComponent],
  imports: [
    CommonModule
  ],
  exports:[
    NavbarComponent,
    FeaturesComponent,
    HomeComponent,
    PricingComponent
  ]
})
export class PagesModule { }
