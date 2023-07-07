import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminbarComponent } from './adminbar.component';

describe('AdminbarComponent', () => {
  let component: AdminbarComponent;
  let fixture: ComponentFixture<AdminbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminbarComponent]
    });
    fixture = TestBed.createComponent(AdminbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
