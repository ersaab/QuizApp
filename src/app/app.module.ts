import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms"; 
import { Router, RouterLink, RouterModule } from "@angular/router";
import {NgxPaginationModule} from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { QuesComponent } from './ques/ques.component';
import { ResultComponent } from './result/result.component';
import { QuestionsService } from './services/questions.service';
import { ResultService } from './services/result.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    QuesComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [QuestionsService, ResultService],
  bootstrap: [AppComponent]
})
export class AppModule { }
