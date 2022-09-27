import { AfterViewChecked, AfterViewInit, Component, ViewChild } from '@angular/core';

import { ChildViewComponent } from './child-view.component';
import { LoggerService } from './logger.service';

@Component({
  selector: 'after-view',
  template: `
    <div>child view begins</div>
      <app-child-view></app-child-view>
    <div>child view ends</div>
  `
   + `
    <p *ngIf="comment" class="comment">
      {{comment}}
    </p>
  `
})
export class AfterViewComponent implements  AfterViewChecked, AfterViewInit {
  comment = '';
  private prevHero = '';

  @ViewChild(ChildViewComponent) viewChild!: ChildViewComponent;

  constructor(private logger: LoggerService) {
    this.logIt('AfterView constructor');
  }

  ngAfterViewInit() {
    this.logIt('AfterViewInit');
    this.doSomething();
  }

  ngAfterViewChecked() {
    if (this.prevHero === this.viewChild.hero) {
      this.logIt('AfterViewChecked (no change)');
    } else {
      this.prevHero = this.viewChild.hero;
      this.logIt('AfterViewChecked');
      this.doSomething();
    }
  }

  private doSomething() {
    const c = this.viewChild.hero.length > 10 ? "That's a long name" : '';
    if (c !== this.comment) {
      this.logger.tick_then(() => this.comment = c);
    }
  }

  private logIt(method: string) {
    const child = this.viewChild;
    const message = `${method}: ${child ? child.hero : 'no'} child view`;
    this.logger.log(message);
  }
}
