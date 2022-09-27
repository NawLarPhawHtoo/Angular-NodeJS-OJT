import { AfterContentChecked, AfterContentInit, Component, ContentChild } from '@angular/core';

import { ChildComponent } from './child.component';
import { LoggerService } from './logger.service';

@Component({
  selector: 'after-content',
  template: `
    <div>projected content begins</div>
      <ng-content></ng-content>
    <div>projected content ends</div>
  `
   + `
    <p *ngIf="comment" class="comment">
      {{comment}}
    </p>
  `
})
export class AfterContentComponent implements AfterContentChecked, AfterContentInit {
  private prevHero = '';
  comment = '';

  @ContentChild(ChildComponent) contentChild!: ChildComponent;

  constructor(private logger: LoggerService) {
    this.logIt('AfterContent constructor');
  }

  ngAfterContentInit() {
    this.logIt('AfterContentInit');
    this.doSomething();
  }

  ngAfterContentChecked() {
    if (this.prevHero === this.contentChild.hero) {
      this.logIt('AfterContentChecked (no change)');
    } else {
      this.prevHero = this.contentChild.hero;
      this.logIt('AfterContentChecked');
      this.doSomething();
    }
  }

  private doSomething() {
    this.comment = this.contentChild.hero.length > 10 ? "That's a long name" : '';
  }

  private logIt(method: string) {
    const child = this.contentChild;
    const message = `${method}: ${child ? child.hero : 'no'} child content`;
    this.logger.log(message);
  }
}
