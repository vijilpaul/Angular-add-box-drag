import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SublistFormComponent } from './sublist-form.component';

describe('SublistFormComponent', () => {
  let component: SublistFormComponent;
  let fixture: ComponentFixture<SublistFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SublistFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SublistFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
