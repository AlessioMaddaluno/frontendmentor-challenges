import { Component } from '@angular/core';
import { Job } from './models/job.model';
import { JobService } from './services/job.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  data:Job[] | null = null;
  filters: string[] = []

  constructor(private jobService:JobService){
    this.search();
  }

  onTagSearch(data:any){
    if (!this.filters.some(f => f === data )){
      this.filters.push(data);
    }
    this.search();
  }

  onClearFilters(filter:string){
    if(filter)
      this.filters = this.filters.filter( f => f !== filter );
    else
      this.filters = []

    this.search();
  }

  search(){
    if(this.filters.length > 0)
      this.data = this.jobService.searchByFilters(this.filters)
    else
      this.data = this.jobService.getAll();
  }

}
