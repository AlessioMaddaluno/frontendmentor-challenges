import { Component, Input, OnInit } from '@angular/core';
import { Country } from 'src/app/model/country.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  country : Country | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
