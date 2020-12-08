import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeldInputComponent } from './feld-input.component';

describe('FeldInputComponent', () => {
  let component: FeldInputComponent;
  let fixture: ComponentFixture<FeldInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeldInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeldInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
