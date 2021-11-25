import { HttpClient } from "@angular/common/http";
import {Injectable } from "@angular/core";
import { Country } from "src/app/model/country.model";

@Injectable({
  providedIn: 'root',
 })
export class CountryService {

  baseUrl = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient){}

  getAll(){
    return this.http.get<Country[]>(this.baseUrl + '/all')
  }

  searchByName(countryName:string){
    return this.http.get<Country[]>(this.baseUrl + `/name/${countryName}`)
  }



}
