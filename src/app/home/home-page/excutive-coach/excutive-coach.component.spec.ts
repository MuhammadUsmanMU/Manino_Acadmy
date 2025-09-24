import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcutiveCoachComponent } from './excutive-coach.component';

describe('ExcutiveCoachComponent', () => {
  let component: ExcutiveCoachComponent;
  let fixture: ComponentFixture<ExcutiveCoachComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExcutiveCoachComponent]
    });
    fixture = TestBed.createComponent(ExcutiveCoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
