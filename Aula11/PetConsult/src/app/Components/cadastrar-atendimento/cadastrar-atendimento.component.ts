import { PetShopInterface } from '../../pet-shop-interface';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BankService } from '../../Services/bank.service';
import { DatabaseConnectionService } from '../../Services/database-connection.service';
import { HttpClientModule } from '@angular/common/http';




@Component({
  selector: 'app-cadastrar-atendimento',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule],
  templateUrl: './cadastrar-atendimento.component.html',
  styleUrl: './cadastrar-atendimento.component.scss',
  providers: [DatabaseConnectionService]
})
export class CadastrarAtendimentoComponent {
  formAtendimento: FormGroup;
  constructor(private obj : BankService, private DatabaseConection : DatabaseConnectionService) { 
    this.formAtendimento = new FormGroup({
      dateAtendimento: new FormControl('', [Validators.required]),
      tutorName: new FormControl('', [Validators.required]	),
      petName: new FormControl('', [Validators.required]	),
      especie: new FormControl('', [Validators.required]	),
      race: new FormControl('', [Validators.required]	),
      obs: new FormControl(''),
  });
}

onSubmit() {
  this.obj.salvarAtendimento(this.formAtendimento.value);
  this.DatabaseConection.postData(this.formAtendimento.value).
  subscribe(responseServe =>  {console.log(responseServe)});
  this.formAtendimento.reset();
  console.log(this.obj.obterAtendimentos());
}
}

