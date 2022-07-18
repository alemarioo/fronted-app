import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  collapse = false;
  ngOnInit(): void {
  }

}
