import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoAlumnosLazyComponent } from './listado-alumnos-lazy.component';

describe('ListadoAlumnosLazyComponent', () => {
  let component: ListadoAlumnosLazyComponent;
  let fixture: ComponentFixture<ListadoAlumnosLazyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoAlumnosLazyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoAlumnosLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
