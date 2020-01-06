import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameBoxComponent } from './components/homePage/game-box/game-box.component';
import { AsideQuestionsBarComponent } from './components/homePage/aside-questions-bar/aside-questions-bar.component';
import { ResultFooterComponent } from './components/homePage/result-footer/result-footer.component';
import { RandomQuestionComponent } from './components/randomQuestionPage/random-question/random-question.component';
import { HomePageComponent } from './components/homePage/home-page.component';
import { GameResultsReviewPageComponent } from './components/game-results-review-page/game-results-review-page.component';

@NgModule({
  declarations: [
    AppComponent,
    GameBoxComponent,
    AsideQuestionsBarComponent,
    ResultFooterComponent,
    RandomQuestionComponent,
    HomePageComponent,
    GameResultsReviewPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
