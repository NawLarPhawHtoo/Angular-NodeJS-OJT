import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'routing-app';
  tabIndex = 0;

  constructor(private router: Router) {}

  tabChange(event: any) {
    console.log('tab change', event.index);
    if (event.index === 0) {
      this.router.navigate(['/autocomplete']);
    }else if (event.index === 1) {
      this.router.navigate(['/badge']);
    }else if (event.index === 2) {
    this.router.navigate(['/bottom-sheet']);
  }else if (event.index === 3) {
    this.router.navigate(['/button']);
  }else if (event.index === 4) {
    this.router.navigate(['/card']);
  }else if (event.index === 5) {
    this.router.navigate(['/checkbox']);
  }else if (event.index === 6) {
    this.router.navigate(['/chips-autocomplete']);
  }else if (event.index === 7) {
    this.router.navigate(['/datepicker']);
  }else if (event.index === 8) {
    this.router.navigate(['/dialog']);
  }else if (event.index === 9) {
    this.router.navigate(['/expansion-panel']);
  }else if (event.index === 10) {
    this.router.navigate(['/form-field']);
  }else if (event.index === 11) {
    this.router.navigate(['/grid-list']);
  }else if (event.index === 12) {
    this.router.navigate(['/paginator']);
  }else if (event.index === 13) {
    this.router.navigate(['/progress-bar']);
  }else if (event.index === 14) {
    this.router.navigate(['/slide-toggle']);
  }else if (event.index === 15) {
    this.router.navigate(['/tabs']);
  }else if (event.index === 16) {
    this.router.navigate(['/toolbar']);
  }else if (event.index === 17){
    this.router.navigate(['/tree']);
  }else{
    this.router.navigate(['/stepper']);
  }
}
}
