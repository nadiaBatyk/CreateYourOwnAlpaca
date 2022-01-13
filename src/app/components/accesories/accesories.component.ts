import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatChipListChange } from '@angular/material/chips';
import { Accesorios } from 'src/app/shared/interfaces/accesorios';


@Component({
  selector: 'app-accesories',
  templateUrl: './accesories.component.html',
  styleUrls: ['./accesories.component.scss']
})
export class AccesoriesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input () accesorios: Accesorios[]=[];
  @Output() change: EventEmitter<Accesorios>= new EventEmitter();

  emitirEvento($event:Accesorios){
    this.change.emit($event)
  }
}
