import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResComponent } from './res.component';

describe('ResComponent', () => {
  let component: ResComponent;
  let fixture: ComponentFixture<ResComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResComponent]
    });
    fixture = TestBed.createComponent(ResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
