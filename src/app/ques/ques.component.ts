import { Component, OnInit } from '@angular/core';
import { QuestionsService } from "../services/questions.service";
import { Router } from "@angular/router"
import { anslist } from '../shared/anslist.model';
import { quesDataModel } from "../shared/question.model";
import { ResultService } from "../services/result.service";
import { Result } from "../shared/result.model";

@Component({
  selector: 'app-ques',
  templateUrl: './ques.component.html',
  styleUrls: ['./ques.component.css']
})
export class QuesComponent implements OnInit {

  quesData = new quesDataModel();
  anslist = Array<anslist>();
  ques ;
  newQid;
  marks = new Result(); 
  move :number=0;
  score :number;

  saveSelection(qid, valueSelected)
  {
    var index = this.anslist.findIndex((obj => obj.aid == qid));
     if(index >=0 && index <=4)
      {
        this.anslist[index].userans = valueSelected;
      }
      else
      {
        this.anslist.push({aid: qid, userans: valueSelected});
      }
  }

  results()
  {
    this.score = 0;
    for(var qid=1; qid<=5; qid++)
    {
      var index = this.anslist.findIndex((obj => obj.aid == qid));
      if(index >= 0 && index != null)
      {
        if(this.anslist[index].userans === this.questionservice.getAns(qid-1))
        {
         this.score++
        }
      }
    }
    this.resultservice.passvalue(this.score);
    this.router.navigate(['/result']);
  }

  saveState(newQid)
  {
    for (let index = 0; index < this.anslist.length; index++) 
    {
      if(this.anslist[index].aid === this.newQid)
      {
         this.ques = this.anslist[index].userans
      }
    }
  }

  //---------------------------------------------------Pagination Controls----------------------------------------------
  queslist()
  {
    this.quesData = this.questionservice.getData(this.move);
  }
  
  next(qid)
  {
    if(this.move >=  0 && this.move <= 3)
    {
      this.move++;
      this.quesData = this.questionservice.getData(this.move);
      this.newQid = qid+1;
      this.saveState(this.newQid);
    }
  }

  previous(qid)
  {
    if(this.move >= 1)
    {
      this.move--;
      this.quesData = this.questionservice.getData(this.move);
      this.newQid = qid-1;
      this.saveState(this.newQid);
    }
  }
  //---------------------------------------------------Pagination Controls----------------------------------------------
  constructor(public router : Router, private questionservice : QuestionsService, private resultservice : ResultService ) {}

  ngOnInit(): void {
    this.queslist();
  }

}