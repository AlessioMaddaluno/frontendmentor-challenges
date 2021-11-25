import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesComponent } from './countries.component';
import { CardComponent } from './card/card.component';
import { SearchComponent } from './search/search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CountryDetailComponent } from './country-detail/country-detail.component';



@NgModule({
  declarations: [
    CountriesComponent,
    CardComponent,
    SearchComponent,
    CountryDetailComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    CountriesComponent
  ]
})
export class CountriesModule { }
