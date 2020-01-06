import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {
  private startProgress: number = 0;
  private questionnaireProgress: BehaviorSubject<number>;
  private observable: Observable<number>;


  constructor() {
    this.questionnaireProgress = new BehaviorSubject<number>(this.startProgress);
    this.observable = new Observable((o) => {
      this.questionnaireProgress.subscribe(res => {
        o.next(res)
        if (res === 100) {
          o.complete();
        }
      })
    })
  }

  getQuestionnaireProgress(): Observable<number> {
    return this.observable;
  }

  questionsProgressCounter(): void {
    if (this.startProgress <= 90) {
      this.startProgress += 10;
      this.questionnaireProgress.next(this.startProgress);
    }
  }

  progressInit(): void {
    this.startProgress = 0;
    this.questionnaireProgress.next(this.startProgress);
  }
}
