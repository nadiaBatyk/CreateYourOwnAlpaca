import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-alpaca',
  templateUrl: './custom-alpaca.component.html',
  styleUrls: ['./custom-alpaca.component.scss']
})
export class CustomAlpacaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input () alpaca: any;
}
