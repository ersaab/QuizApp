import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { QuesComponent } from './ques/ques.component';
import { ResultComponent } from './result/result.component';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  { path:'' , component: MainComponent },
  { path:'ques' , component: QuesComponent },
  { path:'result', component: ResultComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
