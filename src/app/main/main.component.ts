import { Component, OnInit } from '@angular/core';

import { QuesComponent } from '../ques/ques.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  userFName :string = '';
  userLName :string = '';
  userEmail :string = '';

  fullName = this.userFName + this.userLName;
  

  constructor() { }

  ngOnInit(): void {
  }

}
