import { JogoDaVelhaComponent } from './jogo-da-velha/jogo-da-velha.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [JogoDaVelhaComponent],
  imports: [
    CommonModule
  ],
  exports: [
    JogoDaVelhaComponent
  ]
})
export class JogoDaVelhaModule { }
