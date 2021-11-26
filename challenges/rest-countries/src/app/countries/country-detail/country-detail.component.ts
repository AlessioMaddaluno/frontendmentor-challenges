import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from 'src/app/model/country.model';
import { CountryService } from 'src/app/shared/services/country.service';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {

  country:Country | undefined

  countryDetails:any;

  constructor(
    private activatedRoute:ActivatedRoute,
    private countriesService:CountryService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const countryCode = params['code'];
      this.countriesService.findByCode(countryCode).subscribe((country) => {

        console.log(country[0].name);
        this.country = country[0];
        this.countryDetails = {}
        this.countryDetails.name       = country[0].name.common
        this.countryDetails.officalName = country[0].name.official
        this.countryDetails.population = country[0].population
        this.countryDetails.region     = country[0].region
        this.countryDetails.subregion  = country[0].subregion
        this.countryDetails.capital    = country[0].capital
        this.countryDetails.tld        = country[0].tld
        this.countryDetails.flag       = country[0].flags.svg

        this.countryDetails.currencies = []
        for (const c in country[0].currencies) {
          this.countryDetails.currencies.push(country[0].currencies[c]['name'])
        }

        this.countryDetails.languages = []
        for (const l in country[0].languages) {
          this.countryDetails.languages.push(country[0].languages[l])
        }

      })
    })
  }

}
