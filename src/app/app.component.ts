import { Component } from '@angular/core';
import { Accesorios } from './shared/interfaces/accesorios';
import { MatChipListChange } from '@angular/material/chips';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'alpaca';
  srcBase:string='../assets/alpaca/';
  accesoriosArray:Accesorios[]=[
      {
        nombre:'Hair',
        tipo:[
          {
            name:'default',
            src:this.srcBase+'hair/default.png'
          },
          {
            name:'curls',
            src:this.srcBase+'hair/curls.png'
          },
          {
            name:'quiff',
            src:this.srcBase+'hair/quiff.png'
          },
        ],
      },
      {
        nombre:'Ears',
        tipo:[
          {
            name:'default',
            src:''
          },
        ],
      },
      {
        nombre:'Eyes',
        tipo:[
          {
            name:'default',
            src:''
          },
        ],
      },
      {
        nombre:'Mouth',
        tipo:[
          {
            name:'default',
            src:''
          },
        ],
      },{
        nombre:'Neck',
        tipo:[
          {
            name:'default',
            src:''
          },
        ],
      },
      {
        nombre:'Leg',
        tipo:[
          {
            name:'default',
            src:''
          },
        ],
      },
      {
        nombre:'Accesories',
        tipo:[
          {
            name:'default',
            src:''
          },
        ],
      },
      {
        nombre:'Background',
        tipo:[
          {
            name:'default',
            src:''
          },
        ],
      }
      
  
      
    ]
  
    opcionSeleccionada(chip:Accesorios){
      console.log(chip.nombre)
      
    }
}
