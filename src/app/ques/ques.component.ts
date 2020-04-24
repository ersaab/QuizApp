import { Component, OnInit } from '@angular/core';
import { QuestionsService } from "../services/questions.service";
import { Router } from "@angular/router"
import { anslist } from '../shared/anslist.model';
import { quesDataModel } from "../shared/question.model";

@Component({
  selector: 'app-ques',
  templateUrl: './ques.component.html',
  styleUrls: ['./ques.component.css']
})
export class QuesComponent implements OnInit {

  quesDataModels = new quesDataModel();
  quesdata;
  anslist = Array<anslist>();
  ques:any = [] ;
  move :number=0;

  checkAns(qid, opts)
  {
    var index = this.anslist.findIndex((obj => obj.aid == qid));
     if(index >=0 && index <=4)
      {
        this.anslist[index].userans = opts;
      }
      else
      {
        this.anslist.push({aid: qid, userans: opts});
      }
        console.log(this.anslist);
  }
  
  results()
  {
    console.log("Result Section");
  }
  
  //Pagination controls --------------------------------------------------------------------
  queslist()
  {
    this.quesdata = this.questionservice.getData(this.move);
  }
  
  next(){
    if(this.move >=  0 && this.move <= 3)
    {
      this.move++;
      this.quesdata = this.questionservice.getData(this.move);
    }
  }

  previous(){
    if(this.move >= 1)
    {
      this.move--;
      this.quesdata = this.questionservice.getData(this.move);
    }
  }
//pagination Controls
  constructor(public router : Router, private questionservice : QuestionsService ) {}

  ngOnInit(): void {
    this.queslist();
    
  }

}
