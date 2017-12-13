import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleRouteComponent } from './simple-route.component';

describe('SimpleRouteComponent', () => {
  let component: SimpleRouteComponent;
  let fixture: ComponentFixture<SimpleRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
