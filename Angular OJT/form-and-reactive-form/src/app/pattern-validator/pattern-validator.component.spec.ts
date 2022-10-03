import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatternValidatorComponent } from './pattern-validator.component';

describe('PatternValidatorComponent', () => {
  let component: PatternValidatorComponent;
  let fixture: ComponentFixture<PatternValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatternValidatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatternValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
