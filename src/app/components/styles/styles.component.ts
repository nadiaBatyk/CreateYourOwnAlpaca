import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Img } from 'src/app/shared/interfaces/img';
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
  @Input () accesorios: Img[]=[];
  @Output() change: EventEmitter<string>= new EventEmitter();

  emitirEvento($event:string){
    this.change.emit($event)
  }
}
