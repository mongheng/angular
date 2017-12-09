import { TestBed, inject } from '@angular/core/testing';

import { HttpcontrollerserviceService } from './httpcontrollerservice.service';

describe('HttpcontrollerserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpcontrollerserviceService]
    });
  });

  it('should be created', inject([HttpcontrollerserviceService], (service: HttpcontrollerserviceService) => {
    expect(service).toBeTruthy();
  }));
});
