import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainListFormComponent } from './main-list-form.component';

describe('MainListFormComponent', () => {
  let component: MainListFormComponent;
  let fixture: ComponentFixture<MainListFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainListFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainListFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
