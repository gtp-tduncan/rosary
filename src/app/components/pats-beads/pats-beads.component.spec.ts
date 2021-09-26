import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatsBeadsComponent } from './pats-beads.component';

describe('PatsBeadsComponent', () => {
  let component: PatsBeadsComponent;
  let fixture: ComponentFixture<PatsBeadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatsBeadsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatsBeadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
