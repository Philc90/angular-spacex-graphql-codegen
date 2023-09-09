import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchListComponent } from './launch-list.component';

describe('LaunchListComponent', () => {
  let component: LaunchListComponent;
  let fixture: ComponentFixture<LaunchListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LaunchListComponent]
    });
    fixture = TestBed.createComponent(LaunchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
