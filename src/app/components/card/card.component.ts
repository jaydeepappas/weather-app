import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() responseKeys: Array<string>;
  @Input() response: Object;
  @Input() responseReceived: boolean;
  @Input() location: string;

  constructor() {

  }

  ngOnInit(): void { }

  kelvinToFahrenheit(kelvinTemp): number {
    return (kelvinTemp * 9 / 5) - 459.67;
  }

  getDate() { return new Date().toLocaleString(); }
}
