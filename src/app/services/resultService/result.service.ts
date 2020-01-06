import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  private correctAnswersCount: BehaviorSubject<number>;
  private observable: Observable<number>;
  startCounter: number = 0;

  constructor() {
    this.correctAnswersCount = new BehaviorSubject<number>(this.startCounter);
    this.observable = new Observable((o) => {
      this.correctAnswersCount.subscribe(res => {
        o.next(res)
      })
    })
  }

  getNumOfCorrectAnswers(): Observable<number> {
    return this.observable;
  }

  correctAnswersCounter():void {
    this.startCounter += 1;
    this.correctAnswersCount.next(this.startCounter);
  }

  correctAnswersInit():void {
    this.startCounter = 0;
    this.correctAnswersCount.next(this.startCounter);
  }
}
