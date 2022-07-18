import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'admin-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input() collapse:boolean = false;
  @Output () collapseResponse: EventEmitter<boolean> = new EventEmitter();

  closeMenu(){this.collapseResponse.emit(false);}

  constructor() { }

  ngOnInit(): void {
  }


}
