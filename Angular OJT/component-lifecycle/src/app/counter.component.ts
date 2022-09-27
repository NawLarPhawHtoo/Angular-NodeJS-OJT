import {
  Component, Input,
  OnChanges, SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>Counter = {{counter}}</p>

    <div class="info">
      <h3>Counter Change Log</h3>
      <div *ngFor="let chg of changeLog" appSpy class="log">{{chg}}</div>
    </div>
  `
})
export class MyCounterComponent implements OnChanges {
  @Input() counter = 0;
  changeLog: string[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (this.counter === 0) {
      this.changeLog = [];
    }

    const chng = changes['counter'];
    const cur = chng.currentValue;
    const prev = JSON.stringify(chng.previousValue);
    this.changeLog.push(`counter: currentValue = ${cur}, previousValue = ${prev}`);
  }
}
