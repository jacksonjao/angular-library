import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CompanyButtonComponent} from './company-button.component';

describe('CompanyButtonComponent', () => {
  let component: CompanyButtonComponent;
  let fixture: ComponentFixture<CompanyButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CompanyButtonComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
