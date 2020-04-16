import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

export class User {
  public userName: string;
  public userEmail: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
 emailPattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/";
 
  model =  new User();
  
  onSubmit(form) {
      console.log(form.value)
    }
  constructor(public router: Router) {}

  ngOnInit(): void {
  }

}
