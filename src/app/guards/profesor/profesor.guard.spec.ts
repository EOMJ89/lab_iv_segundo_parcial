import { TestBed, async, inject } from '@angular/core/testing';

import { ProfesorGuard } from './profesor.guard';

describe('ProfesorGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfesorGuard]
    });
  });

  it('should ...', inject([ProfesorGuard], (guard: ProfesorGuard) => {
    expect(guard).toBeTruthy();
  }));
});
