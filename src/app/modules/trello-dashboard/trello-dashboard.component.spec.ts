import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrelloDashboardComponent } from './trello-dashboard.component';

describe('TrelloDashboardComponent', () => {
  let component: TrelloDashboardComponent;
  let fixture: ComponentFixture<TrelloDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrelloDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrelloDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
