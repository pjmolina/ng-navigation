import { TestBed, async, inject } from '@angular/core/testing';

import { RestrictedAreaGuard } from './restricted-area.guard';

describe('RestrictedAreaGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestrictedAreaGuard]
    });
  });

  it('should ...', inject([RestrictedAreaGuard], (guard: RestrictedAreaGuard) => {
    expect(guard).toBeTruthy();
  }));
});
