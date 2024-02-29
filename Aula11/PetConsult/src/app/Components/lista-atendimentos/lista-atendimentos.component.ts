import { Component, OnInit } from '@angular/core';
import { BankService } from '../../Services/bank.service';
import { CommonModule } from '@angular/common';
import { DatabaseConnectionService } from '../../Services/database-connection.service';
import { HttpClientModule } from '@angular/common/http';
import { PetShopInterface } from '../../pet-shop-interface';


@Component({
  selector: 'app-lista-atendimentos',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './lista-atendimentos.component.html',
  styleUrl: './lista-atendimentos.component.scss',
  providers: [DatabaseConnectionService]
})
export class ListaAtendimentosComponent implements OnInit {
  loadedAtemdimentos: PetShopInterface[] = [];
  constructor(private Database: BankService, private DataBaseServidor: DatabaseConnectionService) { }
 
  ngOnInit(): void {
    
    this.ListarAtendimentos();

  }
  


  ListarAtendimentos() {
    this.DataBaseServidor.getData().subscribe((response) => {
      this.loadedAtemdimentos = response;
    });
  
  }

}
