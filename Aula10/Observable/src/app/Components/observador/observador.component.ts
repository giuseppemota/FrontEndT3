import { Component } from '@angular/core';
import { ObservableServiceService } from '../../Services/observable-service.service';

@Component({
  selector: 'app-observador',
  standalone: true,
  imports: [],
  templateUrl: './observador.component.html',
  styleUrl: './observador.component.css'
})
export class ObservadorComponent {
  numbers: number[] = []
  constructor(private observableService: ObservableServiceService) {
    this.observableService.Numbers1to100().subscribe((numeros) => {
      this.numbers = numeros;
    });
  }
}
