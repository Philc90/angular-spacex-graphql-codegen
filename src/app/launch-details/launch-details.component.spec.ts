import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchDetailsComponent } from './launch-details.component';

describe('LaunchDetailsComponent', () => {
  let component: LaunchDetailsComponent;
  let fixture: ComponentFixture<LaunchDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LaunchDetailsComponent]
    });
    fixture = TestBed.createComponent(LaunchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
