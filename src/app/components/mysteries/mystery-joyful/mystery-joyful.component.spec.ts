import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MysteryJoyfulComponent } from './mystery-joyful.component';

describe('MysteryJoyfulComponent', () => {
  let component: MysteryJoyfulComponent;
  let fixture: ComponentFixture<MysteryJoyfulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MysteryJoyfulComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MysteryJoyfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
