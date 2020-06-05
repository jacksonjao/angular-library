import {TestBed} from '@angular/core/testing';

import {JacksonjaoButtonsService} from './jacksonjao-buttons.service';

describe('JacksonjaoButtonsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JacksonjaoButtonsService = TestBed.get(JacksonjaoButtonsService);
    expect(service).toBeTruthy();
  });
});
