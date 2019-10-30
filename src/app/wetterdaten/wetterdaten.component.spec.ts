/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WetterdatenComponent } from './wetterdaten.component';

describe('WetterdatenComponent', () => {
  let component: WetterdatenComponent;
  let fixture: ComponentFixture<WetterdatenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WetterdatenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WetterdatenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
