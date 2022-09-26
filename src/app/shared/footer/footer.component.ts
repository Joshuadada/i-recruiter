import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  date = new Date();
  toggleMail: Boolean = false;
  toggleMailBtn: Boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  toggleMailBtnFn(){
    this.toggleMail = true;
    this.toggleMailBtn = false;
  }
  toggleMailFn(){
    this.toggleMail = false;
    this.toggleMailBtn = true;
  }

}
