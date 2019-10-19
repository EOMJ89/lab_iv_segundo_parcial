import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoAlumnosContainerComponent } from './listado-alumnos-container.component';

describe('ListadoAlumnosContainerComponent', () => {
  let component: ListadoAlumnosContainerComponent;
  let fixture: ComponentFixture<ListadoAlumnosContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoAlumnosContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoAlumnosContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
