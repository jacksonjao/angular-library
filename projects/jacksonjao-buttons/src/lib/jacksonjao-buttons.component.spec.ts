import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {JacksonjaoButtonsComponent} from './jacksonjao-buttons.component';

describe('JacksonjaoButtonsComponent', () => {
  let component: JacksonjaoButtonsComponent;
  let fixture: ComponentFixture<JacksonjaoButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [JacksonjaoButtonsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JacksonjaoButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
