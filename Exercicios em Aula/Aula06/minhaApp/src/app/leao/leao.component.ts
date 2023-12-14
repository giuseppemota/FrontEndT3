import { Component } from '@angular/core';

@Component({
  selector: 'app-leao',
  templateUrl: './leao.component.html',
  styleUrl: './leao.component.css'
})
export class LeaoComponent {

  nome: string = 'Leão-Boboca';
  url1: string = "https://www.guarulhos.sp.gov.br/sites/default/files/field/image/Leao%20Kalifa%20-%20Zoologico%20de%20Guarulhos%20-Foto_Fabio_Nunes_Teixeira%20%28104%29.jpg"
  nome2: string = '';

  public onClick(): void{
    alert("Clicou" );
  }
}
