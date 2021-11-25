import { Component, OnInit } from '@angular/core';
import { Country } from '../model/country.model';
import { CountryService } from '../shared/services/country.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  countries: Country[] = []

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.fetchAllCountries();
  }

  onSearch(data:any){

    if(data){
      this.countryService.searchByName(data).subscribe((data) => {
        this.countries = data;
      }, error => {
        this.countries = []
      })
    }
    else {
      this.fetchAllCountries();
    }
  }

  fetchAllCountries(){
    this.countryService.getAll().subscribe(data => {
      this.countries = data;
   })
  }

}
