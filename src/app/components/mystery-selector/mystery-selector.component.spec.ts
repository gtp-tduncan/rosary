import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MysterySelectorComponent } from './mystery-selector.component';

describe('MysterySelectorComponent', () => {
  let component: MysterySelectorComponent;
  let fixture: ComponentFixture<MysterySelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MysterySelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MysterySelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
