import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoMateriasAlumnoLazyComponent } from './listado-materias-alumno-lazy.component';

describe('ListadoMateriasAlumnoLazyComponent', () => {
  let component: ListadoMateriasAlumnoLazyComponent;
  let fixture: ComponentFixture<ListadoMateriasAlumnoLazyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoMateriasAlumnoLazyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoMateriasAlumnoLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
