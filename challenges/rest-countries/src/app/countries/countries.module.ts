import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesComponent } from './countries.component';
import { CardComponent } from './card/card.component';
import { SearchComponent } from './search/search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    CountriesComponent,
    CardComponent,
    SearchComponent,
    CountryDetailComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    CountriesComponent
  ]
})
export class CountriesModule { }
