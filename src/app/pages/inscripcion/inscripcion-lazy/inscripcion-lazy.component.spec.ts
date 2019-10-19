import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InscripcionLazyComponent } from './inscripcion-lazy.component';

describe('InscripcionLazyComponent', () => {
  let component: InscripcionLazyComponent;
  let fixture: ComponentFixture<InscripcionLazyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscripcionLazyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscripcionLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
