import { Component, OnInit } from '@angular/core';
import { QuestionModel } from 'src/app/models/questionModel/question-model';
import { QuestionsService } from 'src/app/services/questionsService/questions.service';

@Component({
  templateUrl: './random-question.component.html',
  styleUrls: ['./random-question.component.less']
})
export class RandomQuestionComponent implements OnInit {
  questions: QuestionModel[];
  randomQuestion: number = Math.floor(Math.random() * 9);

  constructor(private questionsArray: QuestionsService) {
    this.randomQuestion = Math.floor(Math.random() * 9);
  }

  ngOnInit():void {
    this.questionsArray.getQuestions().subscribe((data: QuestionModel[]) => {
      this.questions = data;
    })

    for (let i: number = 0; i < this.questions.length; i++) {
      this.questions[i].selectedAnswerId = null;
      this.questions[i].isAnswered = false;
    }
  }

  onUserAnswer(userAnswer):void {
    this.questions[userAnswer.questionId].selectedAnswerId = userAnswer.pickedAnswerId;
    this.questions[userAnswer.questionId].isAnswered = true;
  }
}
