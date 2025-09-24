import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpowerFutureComponent } from './empower-future.component';

describe('EmpowerFutureComponent', () => {
  let component: EmpowerFutureComponent;
  let fixture: ComponentFixture<EmpowerFutureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpowerFutureComponent]
    });
    fixture = TestBed.createComponent(EmpowerFutureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
