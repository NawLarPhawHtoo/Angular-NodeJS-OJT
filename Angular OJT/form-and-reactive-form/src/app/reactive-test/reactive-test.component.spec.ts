import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveTestComponent } from './reactive-test.component';

describe('ReactiveTestComponent', () => {
  let component: ReactiveTestComponent;
  let fixture: ComponentFixture<ReactiveTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
