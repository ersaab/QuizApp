import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { User } from "../main/main.component";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  greet = "Congratulations!";

  constructor( public router : Router  ) { }

  ngOnInit(): void {
    
  }

}
