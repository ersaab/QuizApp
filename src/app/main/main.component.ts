import { Component, OnInit } from '@angular/core';

import { QuesComponent } from '../ques/ques.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
 emailPattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/";
  userFName :string = '';
  userLName :string = '';
  userEmail :string = '';

  fullName = this.userFName + this.userLName;
  

  constructor() { }

  ngOnInit(): void {
  }

}
