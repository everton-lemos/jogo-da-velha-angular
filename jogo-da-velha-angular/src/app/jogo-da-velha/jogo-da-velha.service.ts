import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JogoDaVelhaService {

  private readonly TAM_TAB: number = 3;
  private readonly X: number = 1;
  private readonly O: number = 2;
  private readonly VAZIO: number = 0;

  private tabuleiro: any;
  private numMovimentos: number;
  private vitoria: any;

  private jogador: number;
  private showInicio: boolean;
  private showTabuleiro: boolean;
  private showFinal: boolean;


  constructor() { }

  inicializar(): void {
    this.showInicio = true;
    this.showTabuleiro = false;
    this.showFinal = false;
    this.numMovimentos = 0;
    this.jogador = this.X;
    this.vitoria = false;
    this.inicializarTabuleiro();
  }

  inicializarTabuleiro(): void {
    this.tabuleiro = [this.TAM_TAB];
    for (let i = 0; i < this.TAM_TAB; i++) {
      this.tabuleiro[i] = [this.VAZIO, this.VAZIO, this.VAZIO];
    }
  }

  get getShowInicio(): boolean {
    return this.showInicio;
  }

  get getShowTabuleiro(): boolean {
    return this.showTabuleiro;
  }

  get getShowFinal(): boolean {
    return this.showFinal;
  }

  get getJogador(): number {
    return this.jogador;
  }

  iniciarJogo(): void {
    this.showInicio = false;
    this.showTabuleiro = true;
  }

  jogar(posX: number, posY: number): void {
    if (this.tabuleiro[posX][posY] !== this.VAZIO ||
      this.vitoria) {
      return;
    }

    this.tabuleiro[posX][posY] = this.jogador;
    this.numMovimentos++;
    this.vitoria = this.fimJogo(posX, posY,
      this.tabuleiro, this.jogador);
    this.jogador = (this.jogador === this.X) ? this.O : this.X;

    if (!this.vitoria && this.numMovimentos < 9) {
      this.cpuJogar();
    }

    // houve vitória
    if (this.vitoria !== false) {
      this.showFinal = true;
    }

    if (!this.vitoria && this.numMovimentos === 9) {
      this.jogador = 0;
      this.showFinal = true;
    }
  }

  fimJogo(linha: number, coluna: number,
          tabuleiro: any, jogador: number): any {
    let fim: any = false;

    if (tabuleiro[linha][0] === jogador &&
      tabuleiro[linha][1] === jogador &&
      tabuleiro[linha][2] === jogador) {
      fim = [[linha, 0], [linha, 1], [linha, 2]];
    }

    if (tabuleiro[0][coluna] === jogador &&
      tabuleiro[1][coluna] === jogador &&
      tabuleiro[2][coluna] === jogador) {
      fim = [[0, coluna], [1, coluna], [2, coluna]];
    }

    // valida as diagonais
    if (tabuleiro[0][0] === jogador &&
      tabuleiro[1][1] === jogador &&
      tabuleiro[2][2] === jogador) {
      fim = [[0, 0], [1, 1], [2, 2]];
    }

    if (tabuleiro[0][2] === jogador &&
      tabuleiro[1][1] === jogador &&
      tabuleiro[2][0] === jogador) {
      fim = [[0, 2], [1, 1], [2, 0]];
    }

    return fim;
  }

  /**
   * Lógica para simular jogada do computador em modo aleatório.
   *
   * @return void
   */
  cpuJogar(): void {
    // verifica jogada de vitória
    let jogada: number[] = this.obterJogada(this.O);

    if (jogada.length <= 0) {
      // tenta jogar para evitar derrota
      jogada = this.obterJogada(this.X);
    }

    if (jogada.length <= 0) {
      const jogadas: any = [];
      for (let i = 0; i < this.TAM_TAB; i++) {
        for (let j = 0; j < this.TAM_TAB; j++) {
          if (this.tabuleiro[i][j] === this.VAZIO) {
            jogadas.push([i, j]);
          }
        }
      }
      const k = Math.floor((Math.random() * (jogadas.length - 1)));
      jogada = [jogadas[k][0], jogadas[k][1]];
    }

    this.tabuleiro[jogada[0]][jogada[1]] = this.jogador;
    this.numMovimentos++;
    this.vitoria = this.fimJogo(jogada[0], jogada[1],
        this.tabuleiro, this.jogador);
    this.jogador = (this.jogador === this.X) ? this.O : this.X;
  }

  obterJogada(jogador: number): number[] {
    const tab = this.tabuleiro;
    for (let lin = 0; lin < this.TAM_TAB; lin++) {
      for (let col = 0; col < this.TAM_TAB; col++) {
        if (tab[lin][col] !== this.VAZIO) {
          continue;
        }
        tab[lin][col] = jogador;
        if (this.fimJogo(lin, col, tab, jogador)) {
          return [lin, col];
        }
        tab[lin][col] = this.VAZIO;
      }
    }
    return [];
  }

  exibirX(posX: number, posY: number): boolean {
    return this.tabuleiro[posX][posY] === this.X;
  }

  exibirO(posX: number, posY: number): boolean {
    return this.tabuleiro[posX][posY] === this.O;
  }


  exibirVitoria(posX: number, posY: number): boolean {
    let exibirVitoria = false;

    if (!this.vitoria) {
      return exibirVitoria;
    }

    for (const pos of this.vitoria) {
      if (pos[0] === posX && pos[1] === posY) {
        exibirVitoria = true;
        break;
      }
    }

    return exibirVitoria;
  }


  novoJogo(): void {
    this.inicializar();
    this.showFinal = false;
    this.showInicio = false;
    this.showTabuleiro = true;
  }

}
