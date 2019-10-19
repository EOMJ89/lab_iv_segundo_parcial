import { TestBed, async, inject } from '@angular/core/testing';

import { AlumnoProfesorGuard } from './alumno-profesor.guard';

describe('AlumnoProfesorGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlumnoProfesorGuard]
    });
  });

  it('should ...', inject([AlumnoProfesorGuard], (guard: AlumnoProfesorGuard) => {
    expect(guard).toBeTruthy();
  }));
});
