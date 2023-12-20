import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  countActiveToInactive: number = 0;
  countInactiveToActive: number = 0;

  constructor() { }

  countActiveToInactiveNumber() {
    this.countActiveToInactive++;
    console.log(`the number of active->inactive is ${this.countActiveToInactive}`);
  }

  countInactiveToActiveNumber() {
    this.countInactiveToActive++;
    console.log(`the number of active->inactive is ${this.countInactiveToActive}`);
  }
}
