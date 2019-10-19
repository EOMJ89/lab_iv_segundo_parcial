import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoUsuariosContainerComponent } from './listado-usuarios-container.component';

describe('ListadoUsuariosContainerComponent', () => {
  let component: ListadoUsuariosContainerComponent;
  let fixture: ComponentFixture<ListadoUsuariosContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoUsuariosContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoUsuariosContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
