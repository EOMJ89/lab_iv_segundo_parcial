import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarMateriaContainerComponent } from './modificar-materia-container.component';

describe('ModificarMateriaContainerComponent', () => {
  let component: ModificarMateriaContainerComponent;
  let fixture: ComponentFixture<ModificarMateriaContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarMateriaContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarMateriaContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
