
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';



@Component({
  selector: 'app-cadastrar-atendimento',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './cadastrar-atendimento.component.html',
  styleUrl: './cadastrar-atendimento.component.scss'
})
export class CadastrarAtendimentoComponent {
  formAtendimento: FormGroup;
  constructor() { 
    this.formAtendimento = new FormGroup({
      dateAtendimento: new FormControl('', [Validators.required]),
      tutorName: new FormControl('', [Validators.required]	),
      petName: new FormControl('', [Validators.required]	),
      especie: new FormControl('', [Validators.required]	),
      race: new FormControl('', [Validators.required]	),
      obs: new FormControl('', [Validators.required]	),
  });
}

onSubmit() {
  console.log(this.formAtendimento.value);
}
}
