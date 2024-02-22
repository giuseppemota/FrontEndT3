import { Component, OnInit } from '@angular/core';
import { BankService } from '../../Services/bank.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-lista-atendimentos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-atendimentos.component.html',
  styleUrl: './lista-atendimentos.component.scss'
})
export class ListaAtendimentosComponent implements OnInit {
  
 constructor(private Database : BankService) { }
  ngOnInit(): void {
    this.ListarAtendimentos();
  }
  public atendimentos: any[] = [];

 ListarAtendimentos() {
  this.atendimentos = this.Database.obterAtendimentos();
  
}

}
