import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VertualComponent } from './vertual.component';

describe('VertualComponent', () => {
  let component: VertualComponent;
  let fixture: ComponentFixture<VertualComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VertualComponent]
    });
    fixture = TestBed.createComponent(VertualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
