import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MysteryLuminousComponent } from './mystery-luminous.component';

describe('MysteryLuminousComponent', () => {
  let component: MysteryLuminousComponent;
  let fixture: ComponentFixture<MysteryLuminousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MysteryLuminousComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MysteryLuminousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
