import { Component, Input, OnInit } from '@angular/core';
import { Accesorios } from '../../shared/interfaces/accesorios';

@Component({
  selector: 'app-styles',
  templateUrl: './styles.component.html',
  styleUrls: ['./styles.component.scss']
})
export class StylesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input () accesorios: Accesorios[]=[];
}
