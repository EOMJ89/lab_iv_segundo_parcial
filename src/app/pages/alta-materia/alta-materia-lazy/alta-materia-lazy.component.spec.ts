import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaMateriaLazyComponent } from './alta-materia-lazy.component';

describe('AltaMateriaLazyComponent', () => {
  let component: AltaMateriaLazyComponent;
  let fixture: ComponentFixture<AltaMateriaLazyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaMateriaLazyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaMateriaLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
