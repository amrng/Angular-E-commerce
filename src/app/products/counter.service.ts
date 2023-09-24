import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  private CounterCounter = new BehaviorSubject<number>(1);
  constructor() {}

  getCounter() {
    return this.CounterCounter.asObservable();
  }
  setCounter(newVal: number) {
    this.CounterCounter.next(newVal);
  }
}
