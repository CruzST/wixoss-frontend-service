import { TestBed } from '@angular/core/testing';

import { ErrorCatchingInterceptorInterceptor } from './error-catching-interceptor.interceptor';

describe('ErrorCatchingInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ErrorCatchingInterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ErrorCatchingInterceptorInterceptor = TestBed.inject(ErrorCatchingInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
