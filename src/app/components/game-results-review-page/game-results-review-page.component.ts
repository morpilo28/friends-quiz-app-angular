import { Component, OnInit, Input } from '@angular/core';
import { QuestionModel } from 'src/app/models/questionModel/question-model';
import { QuestionsService } from 'src/app/services/questionsService/questions.service';

@Component({
  templateUrl: './game-results-review-page.component.html',
  styleUrls: ['./game-results-review-page.component.less']
})
export class GameResultsReviewPageComponent implements OnInit {
  questions: QuestionModel[];
  idx: number = 0;
  @Input() numOfQuestions:number;

  constructor(private questionsArray: QuestionsService) { }

  ngOnInit():void {
    this.questionsArray.getQuestions().subscribe((data: QuestionModel[]) => {
      this.questions = data;
    })
  }

  onNext():void {
    if (this.idx <= 8) {
      this.idx++;
    }
  }

  onPrev():void {
    if (this.idx !== 0) {
      this.idx--;
    }
  }
}
