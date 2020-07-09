import { JogoDaVelhaService } from './../jogo-da-velha.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jogo-da-velha',
  templateUrl: './jogo-da-velha.component.html',
  styleUrls: ['./jogo-da-velha.component.css']
})
export class JogoDaVelhaComponent implements OnInit {

  constructor(private service: JogoDaVelhaService) { }

  ngOnInit(): void {
    this.service.inicializar();
  }

  get showInicio(): boolean {
    return this.service.getShowInicio;
  }

  get showTabuleiro(): boolean {
    return this.service.getShowTabuleiro;
  }

  get showFinal(): boolean {
    return this.service.getShowFinal;
  }

  iniciarJogo(): void {
    this.service.iniciarJogo();
  }

  jogar(posX: number, posY: number): void {
    this.service.jogar(posX, posY);
  }

  exibirX(posX: number, posY: number): void {
    this.service.exibirX(posX, posY);
  }

  exibirO(posX: number, posY: number): void {
    this.service.exibirO(posX, posY);
  }

  exibirVitoria(posX: number, posY: number): void {
    this.service.exibirVitoria(posX, posY);
  }

  // get jogardor(): number {
  //   return this.service.getJogador();
  // }

}
