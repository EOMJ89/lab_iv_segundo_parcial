import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoMateriasAlumnoContainerComponent } from './listado-materias-alumno-container.component';

describe('ListadoMateriasAlumnoContainerComponent', () => {
  let component: ListadoMateriasAlumnoContainerComponent;
  let fixture: ComponentFixture<ListadoMateriasAlumnoContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoMateriasAlumnoContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoMateriasAlumnoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
