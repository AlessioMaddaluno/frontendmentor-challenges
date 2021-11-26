import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from './countries/countries.component';
import { CountryDetailComponent } from './countries/country-detail/country-detail.component';

const routes: Routes = [
  { path: 'country-detail/:code',component: CountryDetailComponent},
  { path: '', component: CountriesComponent },
  { path: '**', component: CountriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
