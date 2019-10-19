import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoUsuariosLazyComponent } from './listado-usuarios-lazy.component';

describe('ListadoUsuariosLazyComponent', () => {
  let component: ListadoUsuariosLazyComponent;
  let fixture: ComponentFixture<ListadoUsuariosLazyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoUsuariosLazyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoUsuariosLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
