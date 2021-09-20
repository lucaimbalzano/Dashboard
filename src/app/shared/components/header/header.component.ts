import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  sidebarDoor:boolean = false;

  constructor() { }

  ngOnInit() { }

  toggleSideBar() {
    this.sidebarDoor = !this.sidebarDoor;
    this.toggleSideBarForMe.emit( this.sidebarDoor );

//Advatage to load items
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);

  }

}
