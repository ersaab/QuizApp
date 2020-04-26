import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  emailPattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
  namePattern="[a-zA-Z ]*";
  user: any = {};

  onSubmit(form) 
  {
  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.user));
  this.router.navigate(['/ques']);
  }

  constructor(public router: Router) {}
  ngOnInit(): void {
  }
}
