import { EventEmitter, Output } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';

import { Job } from '../models/job.model';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {

  @Input()
  jobData:Job | undefined;

  @Output()
  tagSearchClick: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onTagClick(data:any){
    this.tagSearchClick.emit(data);
  }

}
