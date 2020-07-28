import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-location-input',
  templateUrl: './location-input.component.html',
  styleUrls: ['./location-input.component.css']
})
export class LocationInputComponent implements OnInit {
  value = 'City';
@Input() f;
  constructor() { }

  ngOnInit(): void {
  }

}
