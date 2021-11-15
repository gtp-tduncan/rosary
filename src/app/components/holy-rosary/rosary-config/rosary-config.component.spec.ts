import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RosaryConfigComponent } from './rosary-config.component';

describe('RosaryConfigComponent', () => {
  let component: RosaryConfigComponent;
  let fixture: ComponentFixture<RosaryConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RosaryConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RosaryConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
