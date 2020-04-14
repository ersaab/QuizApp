import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { QuesComponent } from './ques/ques.component';
import { ResultComponent } from './result/result.component';


const routes: Routes = [
  { path:'' , component: AppComponent },
  { path:'result' , component: ResultComponent },
  { path:'ques/:id' , component: QuesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
