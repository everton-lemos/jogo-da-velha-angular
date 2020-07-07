import { JogoDaVelhaService } from './jogo-da-velha/jogo-da-velha.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [JogoDaVelhaService]
})
export class AppRoutingModule { }
