/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ViewuserComponent } from './viewuser.component';

describe('ViewuserComponent', () => {
  let component: ViewuserComponent;
  let fixture: ComponentFixture<ViewuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
