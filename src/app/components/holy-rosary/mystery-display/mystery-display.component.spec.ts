import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MysteryDisplayComponent } from './mystery-display.component';

describe('MysteryDisplayComponent', () => {
  let component: MysteryDisplayComponent;
  let fixture: ComponentFixture<MysteryDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MysteryDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MysteryDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
