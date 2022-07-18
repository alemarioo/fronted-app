import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { createPopper } from '@popperjs/core';

@Component({
  selector: 'auth-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @ViewChild('menu') menuButton!: ElementRef;
  @ViewChild('displayMenu') menuDisplay!: ElementRef;
  constructor() { }

  collapse = true;

  ngOnInit(): void {
  }

  CreatePopper(){
    this.collapse = !this.collapse;
    
  }

}
