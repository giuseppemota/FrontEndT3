import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BankService {
  private atendimentos: any[] = []; // Array para armazenar os objetos

  constructor() {}

  salvarAtendimento(atendimento: any) {
    this.atendimentos.push(atendimento);
  }

  obterAtendimentos() {
    return this.atendimentos;
  }
}
