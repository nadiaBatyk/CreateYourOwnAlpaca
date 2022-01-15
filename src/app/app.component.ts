import { Component, OnInit } from '@angular/core';
import { Accesorios } from './shared/interfaces/accesorios';
import { Img } from './shared/interfaces/img';
import mergeImages from 'merge-images';
import { saveAs } from 'file-saver';
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
            name:'Default',
            src:this.srcBase+'hair/default.png'
          },
          {
            name:'Curls',
            src:this.srcBase+'hair/curls.png'
          },
          {
            name:'Quiff',
            src:this.srcBase+'hair/quiff.png'
          },
          {
            name:'Short',
            src:this.srcBase+'hair/short.png'
          },
          {
            name:'Bang',
            src:this.srcBase+'hair/bang.png'
          },
          {
            name:'Elegant',
            src:this.srcBase+'hair/elegant.png'
          },
        ],
      },
      {
        nombre:'Ears',
        tipo:[
          {
            name:'Default',
            src:this.srcBase+'ears/default.png'
          },
          {
            name:'Backward',
            src:this.srcBase+'ears/tilt-backward.png'
          },
          {
            name:'Forward',
            src:this.srcBase+'ears/tilt-forward.png'
          },
        ],
      },
      {
        nombre:'Eyes',
        tipo:[
          {
            name:'Default',
            src:this.srcBase+'eyes/default.png'
          },
          {
            name:'Angry',
            src:this.srcBase+'eyes/angry.png'
          },
          {
            name:'Smart',
            src:this.srcBase+'eyes/smart.png'
          },
        ],
      },
      {
        nombre:'Mouth',
        tipo:[
          {
            name:'Default',
            src:this.srcBase+'mouth/default.png'
          },
          {
            name:'Eating',
            src:this.srcBase+'mouth/eating.png'
          },
          {
            name:'Laugh',
            src:this.srcBase+'mouth/laugh.png'
          },
        ],
      },{
        nombre:'Neck',
        tipo:[
          {
            name:'Default',
            src:this.srcBase+'neck/default.png'
          },
          {
            name:'Thick',
            src:this.srcBase+'neck/thick.png'
          },
          
        ],
      },
      {
        nombre:'Leg',
        tipo:[
          {
            name:'Default',
            src:this.srcBase+'leg/default.png'
          },
          {
            name:'Cookie',
            src:this.srcBase+'leg/cookie.png'
          },
          {
            name:'Bubble Tea',
            src:this.srcBase+'leg/bubble-tea.png'
          },
        ],
      },
      {
        nombre:'Accessories',
        tipo:[
          {
            name:'Flower',
            src:this.srcBase+'accessories/flower.png'
          },
          {
            name:'Headphone',
            src:this.srcBase+'accessories/headphone.png'
          },
          {
            name:'Glasses',
            src:this.srcBase+'accessories/glasses.png'
          },
        ],
      },
      {
        nombre:'Background',
        tipo:[
          {
            name:'Blue',
            src:this.srcBase+'backgrounds/blue60.png'
          },
          {
            name:'Green',
            src:this.srcBase+'backgrounds/green60.png'
          },
          {
            name:'Red',
            src:this.srcBase+'backgrounds/red60.png'
          },
        ],
      }
      
    ]
    
    alpaca:any={
      hair:this.accesoriosArray[0].tipo[0].src,
      ears:this.accesoriosArray[1].tipo[0].src,
      eyes:this.accesoriosArray[2].tipo[0].src,
      mouth:this.accesoriosArray[3].tipo[0].src,
      neck:this.accesoriosArray[4].tipo[0].src,
      leg:this.accesoriosArray[5].tipo[0].src,
      accessories:this.accesoriosArray[6].tipo[0].src,
      background:this.accesoriosArray[7].tipo[0].src,
      nose:this.srcBase+'nose.png'
    }



    arrayStyle:Img[]=this.accesoriosArray[0].tipo;
    nuevoStyle:string=''
    chipDefault:Accesorios={
      nombre:'',
      tipo:[]
    }
    opcionSeleccionada(chip:Accesorios){
      
      let index = this.accesoriosArray.indexOf(chip);
      this.arrayStyle=this.accesoriosArray[index].tipo;
      this.chipDefault={
        nombre:chip.nombre,
        tipo:chip.tipo
      }
      
    }
    
    estiloSeleccionado(styleChip:string){
      this.nuevoStyle=styleChip
     
      this.chipDefault.tipo.forEach(item=>{
        item.name===this.nuevoStyle
        ?this.alpaca[this.chipDefault.nombre.toLowerCase()]=item.src
        :this.alpaca[this.chipDefault.nombre.toLowerCase()]
      })
    }

    resetAlpaca(){
      this.alpaca={
        hair:this.accesoriosArray[0].tipo[0].src,
      ears:this.accesoriosArray[1].tipo[0].src,
      eyes:this.accesoriosArray[2].tipo[0].src,
      mouth:this.accesoriosArray[3].tipo[0].src,
      neck:this.accesoriosArray[4].tipo[0].src,
      leg:this.accesoriosArray[5].tipo[0].src,
      accessories:this.accesoriosArray[6].tipo[0].src,
      background:this.accesoriosArray[7].tipo[0].src,
      nose:this.srcBase+'nose.png'
      }
    }

    
     descargarImagenes(){
      mergeImages(
        
        [this.alpaca.background,
          this.alpaca.neck,
          this.alpaca.leg,
          this.alpaca.ears,
          this.alpaca.hair,
          this.alpaca.accessories,
          this.alpaca.nose,
         this.alpaca.eyes,
         this.alpaca.mouth,
         
        ])
    .then(b64 => {
        saveAs(b64, 'yourAlpaca.png');
        }
      );
      
    }
    randomAlpaca(){
      this.alpaca={
        hair:this.accesoriosArray[0].tipo[Math.floor(Math.random() * this.accesoriosArray[0].tipo.length)].src,
      ears:this.accesoriosArray[1].tipo[Math.floor(Math.random() * this.accesoriosArray[1].tipo.length)].src,
      eyes:this.accesoriosArray[2].tipo[Math.floor(Math.random() * this.accesoriosArray[2].tipo.length)].src,
      mouth:this.accesoriosArray[3].tipo[Math.floor(Math.random() * this.accesoriosArray[3].tipo.length)].src,
      neck:this.accesoriosArray[4].tipo[Math.floor(Math.random() * this.accesoriosArray[4].tipo.length)].src,
      leg:this.accesoriosArray[5].tipo[Math.floor(Math.random() * this.accesoriosArray[5].tipo.length)].src,
      accessories:this.accesoriosArray[6].tipo[Math.floor(Math.random() * this.accesoriosArray[6].tipo.length)].src,
      background:this.accesoriosArray[7].tipo[Math.floor(Math.random() * this.accesoriosArray[7].tipo.length)].src,
      nose:this.srcBase+'nose.png'
      }
    }
}
