import { HttpClient } from "@angular/common/http";
import {Injectable } from "@angular/core";
import { Country } from "src/app/model/country.model";

@Injectable({
  providedIn: 'root',
 })
export class CountryService {

  baseUrl = 'https://restcountries.com/';

  constructor(private http: HttpClient){}

  getAll(){
    return this.http.get<Country[]>(this.baseUrl + '/v3.1/all')
  }

  searchByName(countryName:string){
    return this.http.get<Country[]>(this.baseUrl + `/v3.1/name/${countryName}`)
  }

  findByCode(countryCode:string){
    return this.http.get<Country[]>(this.baseUrl + `/v3.1/alpha/${countryCode}`)
  }



}
