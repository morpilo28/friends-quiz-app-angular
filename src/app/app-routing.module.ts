import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RandomQuestionComponent } from './components/randomQuestionPage/random-question/random-question.component';
import { HomePageComponent } from './components/homePage/home-page.component';
import { GameResultsReviewPageComponent } from './components/game-results-review-page/game-results-review-page.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'question', component: RandomQuestionComponent },
  { path: 'review', component: GameResultsReviewPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
