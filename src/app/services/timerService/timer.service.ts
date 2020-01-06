import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  private countDownTimer: BehaviorSubject<number>;
  private observable: Observable<number>;
  secondsLeft: number = 90;

  constructor() {
    this.countDownTimer = new BehaviorSubject<number>(this.secondsLeft);
    setInterval(() => {
      this.secondsLeft--;
      this.countDownTimer.next(this.secondsLeft);
    }, 1000)

    this.observable = new Observable((o) => {
      this.countDownTimer.subscribe(res => {
        o.next(res)
        if (res === 0) {
          o.complete();
        }
      })
    })
  }

  getTimer(): Observable<number> {
    return this.observable;
  }

  timerInit(): void {
    this.secondsLeft = 90;
    this.countDownTimer.next(this.secondsLeft);
  }
}
