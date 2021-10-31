import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotateDivComponent } from './rotate-div.component';

describe('RotateDivComponent', () => {
  let component: RotateDivComponent;
  let fixture: ComponentFixture<RotateDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RotateDivComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RotateDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
