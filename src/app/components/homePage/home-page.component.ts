import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/services/questionsService/questions.service';
import { QuestionModel } from 'src/app/models/questionModel/question-model';
import { ProgressService } from 'src/app/services/progressService/progress.service';
import { ResultService } from 'src/app/services/resultService/result.service';
import { TimerService } from 'src/app/services/timerService/timer.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less']
})
export class HomePageComponent implements OnInit {
  questions: QuestionModel[];
  questionToShowId: number;
  secondsLeft: number;

  constructor(private questionsArray: QuestionsService, private progressService: ProgressService, private correctAnswersCount: ResultService, private timer: TimerService, private router: Router) {
    console.log(this.secondsLeft);
  }

  ngOnInit():void {
    this.progressService.progressInit();
    this.correctAnswersCount.correctAnswersInit();
    this.timer.timerInit();

    this.questionsArray.getQuestions().subscribe((data: QuestionModel[]) => {
      this.questions = data;
    })

    this.timer.getTimer().subscribe((data: number) => {
      this.secondsLeft = data;
      if (this.secondsLeft === 0) {
        this.navigate();
      }

    })

    for (let i: number = 0; i < this.questions.length; i++) {
      this.questions[i].selectedAnswerId = null;
      this.questions[i].isAnswered = false;
    }
  }

  onQuestionToShow(questionId: number):void {
    this.questionToShowId = questionId;
  }

  onUserAnswer(userAnswer):void {
    this.questions[userAnswer.questionId].selectedAnswerId = userAnswer.pickedAnswerId;
    this.questions[userAnswer.questionId].isAnswered = true;
  }

  navigate():void {
    const path = 'review';
    this.router.navigate([path]);
  }

}
