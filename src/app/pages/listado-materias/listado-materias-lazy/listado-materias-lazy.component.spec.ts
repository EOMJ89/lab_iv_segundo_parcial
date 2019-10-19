import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoMateriasLazyComponent } from './listado-materias-lazy.component';

describe('ListadoMateriasLazyComponent', () => {
  let component: ListadoMateriasLazyComponent;
  let fixture: ComponentFixture<ListadoMateriasLazyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoMateriasLazyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoMateriasLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
