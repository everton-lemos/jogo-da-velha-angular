import { Component, OnInit } from '@angular/core';
import { JogoDaVelhaService } from './jogo-da-velha.service';



@Component({
  selector: 'app-jogo-da-velha',
  templateUrl: './jogo-da-velha.component.html',
  styleUrls: ['./jogo-da-velha.component.css']
})
export class JogoDaVelhaComponent implements OnInit {

  constructor(private jogoDaVelhaService: JogoDaVelhaService) { }

  ngOnInit(): void {
   this.jogoDaVelhaService.inicializar();
  }

  get showInicio(): boolean {
   return this.jogoDaVelhaService.getShowInicio;
  }

  get showTabuleiro(): boolean {
   return this.jogoDaVelhaService.getShowTabuleiro;
  }

  get showFinal(): boolean {
    return this.jogoDaVelhaService.getShowFinal;
  }

  iniciarJogo(): void {
   this.jogoDaVelhaService.iniciarJogo();
  }

  jogar(posX: number, posY: number): void {
   this.jogoDaVelhaService.jogar(posX, posY);
  }

  exibirO(posX: number, posY: number): boolean {
    return this.jogoDaVelhaService.exibirO(posX, posY);
  }

  exibirX(posX: number, posY: number): boolean {
    return this.jogoDaVelhaService.exibirX(posX, posY);
  }

  exibirVitoria(posX: number, posY: number): boolean {
    return this.jogoDaVelhaService.exibirVitoria(posX, posY);
  }

  get jogador(): number {
    return this.jogoDaVelhaService.getJogador;
  }

  novoJogo(): void {
    this.jogoDaVelhaService.novoJogo();
  }

}
