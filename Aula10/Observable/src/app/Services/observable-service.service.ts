import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableServiceService {
  private numeros: number[] = [];
  NumbersSubject = new Subject<number[]>();
  NumberObservable = new Observable<any>();
  constructor() { }

  Numbers1to100(): Observable<number[]> {
    for (let i = 1; i <= 100; i++) {
      this.numeros.push(i);
    }

    this.NumbersSubject.next(this.numeros);

    return this.NumbersSubject.asObservable();
  }
}
