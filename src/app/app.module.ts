import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomAlpacaComponent } from './components/custom-alpaca/custom-alpaca.component';
import { AccesoriesComponent } from './components/accesories/accesories.component';
import { StylesComponent } from './components/styles/styles.component';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    AppComponent,
    CustomAlpacaComponent,
    AccesoriesComponent,
    StylesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
