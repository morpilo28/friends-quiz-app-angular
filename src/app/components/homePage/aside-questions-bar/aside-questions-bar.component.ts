import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {QuestionModel} from '../../../models/questionModel/question-model';

@Component({
  selector: 'app-aside-questions-bar',
  templateUrl: './aside-questions-bar.component.html',
  styleUrls: ['./aside-questions-bar.component.less']
})

export class AsideQuestionsBarComponent implements OnInit {
  @Input() question:QuestionModel[];
  @Output() onQuestion: EventEmitter<any> = new EventEmitter<any>();


  constructor() { }

  ngOnInit():void {
  }

  onQuestionClicked(questionId:number):void {
    this.onQuestion.emit(questionId);
  }

}
