import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoMateriasContainerComponent } from './listado-materias-container.component';

describe('ListadoMateriasContainerComponent', () => {
  let component: ListadoMateriasContainerComponent;
  let fixture: ComponentFixture<ListadoMateriasContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoMateriasContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoMateriasContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
