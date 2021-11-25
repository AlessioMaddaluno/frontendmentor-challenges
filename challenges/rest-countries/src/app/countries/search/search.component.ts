import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output()
  searchQuery:EventEmitter<string> = new EventEmitter();

  searchInput: FormControl;

  constructor() {
    this.searchInput = new FormControl('')
  }

  ngOnInit(): void {
    this.searchInput.valueChanges
    .pipe(debounceTime(500))
    .subscribe(countryName => this.searchQuery.emit(countryName))
  }

}

