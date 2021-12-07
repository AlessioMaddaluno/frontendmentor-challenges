import { Injectable } from '@angular/core';
import { Job } from '../models/job.model';
import JSON_DATA from '../../assets/data.json';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  data : Job[] = JSON_DATA;

  getAll() : Job[]{
    return this.data;
  }

  searchByFilters(filters: string[]): Job[]{
    return this.data.filter( (job) => {
      return filters.every( f => job.languages.includes(f))
    })
  }

}
