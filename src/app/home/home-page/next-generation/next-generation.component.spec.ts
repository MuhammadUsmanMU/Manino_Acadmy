import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextGenerationComponent } from './next-generation.component';

describe('NextGenerationComponent', () => {
  let component: NextGenerationComponent;
  let fixture: ComponentFixture<NextGenerationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NextGenerationComponent]
    });
    fixture = TestBed.createComponent(NextGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
