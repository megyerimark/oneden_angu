import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResdatasComponent } from './resdatas.component';

describe('ResdatasComponent', () => {
  let component: ResdatasComponent;
  let fixture: ComponentFixture<ResdatasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResdatasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResdatasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
