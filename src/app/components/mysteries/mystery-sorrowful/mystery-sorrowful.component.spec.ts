import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MysterySorrowfulComponent } from './mystery-sorrowful.component';

describe('MysterySorrowfulComponent', () => {
  let component: MysterySorrowfulComponent;
  let fixture: ComponentFixture<MysterySorrowfulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MysterySorrowfulComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MysterySorrowfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
