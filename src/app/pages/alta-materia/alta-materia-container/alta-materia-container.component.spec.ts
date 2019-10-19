import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaMateriaContainerComponent } from './alta-materia-container.component';

describe('AltaMateriaContainerComponent', () => {
  let component: AltaMateriaContainerComponent;
  let fixture: ComponentFixture<AltaMateriaContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaMateriaContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaMateriaContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
