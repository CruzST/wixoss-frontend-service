import { TestBed } from '@angular/core/testing';

import { InterceptorMessageServiceService } from './interceptor-message-service.service';

describe('InterceptorMessageServiceService', () => {
  let service: InterceptorMessageServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterceptorMessageServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
