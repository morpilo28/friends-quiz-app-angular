import { Component, OnInit, Input } from '@angular/core';
import { ProgressService } from 'src/app/services/progressService/progress.service';
import { ResultService } from 'src/app/services/resultService/result.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result-footer',
  templateUrl: './result-footer.component.html',
  styleUrls: ['./result-footer.component.less']
})
export class ResultFooterComponent implements OnInit {
  @Input() numOfQuestions: number;
  progressCounter: number;
  correctAnswers: number;

  constructor(private progressService: ProgressService, private correctAnswersCount: ResultService, private router:Router) { }

  ngOnInit():void {
    this.progressService.getQuestionnaireProgress().subscribe((data: number) => {
      this.progressCounter = data;
      if (this.progressCounter === 100) {
        this.navigate();
      }
    })
    this.correctAnswersCount.getNumOfCorrectAnswers().subscribe((data: number) => {
      this.correctAnswers = data;
    })
  }

   navigate():void {
    const path = 'review';
    this.router.navigate([path]);
  }

}
