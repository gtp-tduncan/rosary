import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MysteryGloriousComponent } from './mystery-glorious.component';

describe('MysteryGloriousComponent', () => {
  let component: MysteryGloriousComponent;
  let fixture: ComponentFixture<MysteryGloriousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MysteryGloriousComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MysteryGloriousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
