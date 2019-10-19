import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarMateriaLazyComponent } from './modificar-materia-lazy.component';

describe('ModificarMateriaLazyComponent', () => {
  let component: ModificarMateriaLazyComponent;
  let fixture: ComponentFixture<ModificarMateriaLazyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarMateriaLazyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarMateriaLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
