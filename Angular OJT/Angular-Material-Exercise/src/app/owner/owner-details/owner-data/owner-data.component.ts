import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Owner } from 'src/app/interface/owner.model';

@Component({
  selector: 'app-owner-data',
  templateUrl: './owner-data.component.html',
  styleUrls: ['./owner-data.component.scss']
})
export class OwnerDataComponent implements OnInit {

  @Input() public owner: Owner | any;

  public selectOptions=[{name:'Show', value:'Show'},{name:`Don't Show`,value:''}];

  @Output() selectEmitt=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public onChange=(event:any)=>{
    this.selectEmitt.emit(event.value);

  }

}
