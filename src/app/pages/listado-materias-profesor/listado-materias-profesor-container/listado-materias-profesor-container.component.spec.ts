import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoMateriasProfesorContainerComponent } from './listado-materias-profesor-container.component';

describe('ListadoMateriasProfesorContainerComponent', () => {
  let component: ListadoMateriasProfesorContainerComponent;
  let fixture: ComponentFixture<ListadoMateriasProfesorContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoMateriasProfesorContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoMateriasProfesorContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
