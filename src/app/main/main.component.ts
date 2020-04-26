import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

export class user
{
  public userName: string;
  public userEmail: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  emailPattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
  namePattern="[a-zA-Z ]*";
  model =  new user();
  linkbtn :boolean = true;

  onSubmit(form) 
    {
      this.linkbtn = false;
    }

  constructor(public router: Router) {}
  ngOnInit(): void {
  }
}
