import { Component, OnInit } from '@angular/core';
import { ResultService } from "../services/result.service";
import { Router } from "@angular/router";
import { Result } from "../shared/result.model";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  greet = "Congratulations!";

  marks = new Result();
  

  constructor( public router : Router, private resultservice: ResultService  ) { }

  ngOnInit(): void {
    this.marks = this.resultservice.getvalue();
  }

}
