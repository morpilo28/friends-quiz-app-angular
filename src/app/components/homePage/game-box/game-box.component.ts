import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { QuestionModel } from 'src/app/models/questionModel/question-model';
import { ProgressService } from 'src/app/services/progressService/progress.service';
import { ResultService } from 'src/app/services/resultService/result.service';
import { TimerService } from 'src/app/services/timerService/timer.service';

@Component({
  selector: 'app-game-box',
  templateUrl: './game-box.component.html',
  styleUrls: ['./game-box.component.less']
})
export class GameBoxComponent implements OnInit {
  @Input() question: QuestionModel;
  @Input() secondsLeft: number;
  @Output() UserAnswer: EventEmitter<{ pickedAnswerId: number, questionId: number }> = new EventEmitter<{ pickedAnswerId: number, questionId: number }>();
  
  constructor(private progressService: ProgressService, private correctAnswersCount: ResultService, private timer: TimerService) { }

  ngOnInit():void {
    this.timer.getTimer().subscribe((data: number) => {
      this.secondsLeft = data;
    })
  }

  onPickedAnswer(event: MouseEvent, pickedAnswerId: number, questionId: number):void {
    this.progressService.questionsProgressCounter();
    if (pickedAnswerId === this.question.correctAnswerId) {
      this.correctAnswersCount.correctAnswersCounter();
    }

    const data: { pickedAnswerId: number, questionId: number } = {
      pickedAnswerId: pickedAnswerId,
      questionId: questionId
    }

    this.UserAnswer.emit(data);
  }

}
