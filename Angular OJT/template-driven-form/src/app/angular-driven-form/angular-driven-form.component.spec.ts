import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularDrivenFormComponent } from './angular-driven-form.component';

describe('AngularDrivenFormComponent', () => {
  let component: AngularDrivenFormComponent;
  let fixture: ComponentFixture<AngularDrivenFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularDrivenFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularDrivenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
