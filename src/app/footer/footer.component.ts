import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
creater :string = "Harmanjit Singh"
link :string = "http://www.erharmanjitsingh.com/"
year = new Date().getFullYear();


  constructor() { }

  ngOnInit(): void {
  }

}
