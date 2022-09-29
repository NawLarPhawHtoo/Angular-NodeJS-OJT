import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map,startWith} from 'rxjs/operators';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {

  myControl=new FormControl('');
  options:string[]=['One','Two','Three','Four','Five'];
  filteredOptions: Observable<string[]> | undefined;

  constructor() { }

  ngOnInit(){
    this.filteredOptions=this.myControl.valueChanges.pipe(
          startWith(''),
          map(value => this.filter(value ||'')),
          );
  }
  private filter(value:string):string[] {
    const filterValue=value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

}
