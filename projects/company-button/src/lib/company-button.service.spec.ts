import {TestBed} from '@angular/core/testing';

import {CompanyButtonService} from './company-button.service';

describe('CompanyButtonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompanyButtonService = TestBed.get(CompanyButtonService);
    expect(service).toBeTruthy();
  });
});
