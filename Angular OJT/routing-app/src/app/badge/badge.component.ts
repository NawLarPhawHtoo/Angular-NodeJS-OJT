import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent implements OnInit {

  hidden: boolean = false;

  toggleBadgeVisibility(){
    this.hidden =!this.hidden;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
