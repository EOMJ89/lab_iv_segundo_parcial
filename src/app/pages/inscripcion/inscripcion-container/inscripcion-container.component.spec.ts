import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InscripcionContainerComponent } from './inscripcion-container.component';

describe('InscripcionContainerComponent', () => {
  let component: InscripcionContainerComponent;
  let fixture: ComponentFixture<InscripcionContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscripcionContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscripcionContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
