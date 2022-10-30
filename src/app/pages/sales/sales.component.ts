import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  constructor() { }
  page:number = 1;
  ngOnInit(): void {
  }

  gotoPage(increment:number){
    if(this.page+increment<1){ return };
    this.page+= increment;
  }

}
