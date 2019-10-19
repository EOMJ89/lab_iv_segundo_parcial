import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajesLazyComponent } from './mensajes-lazy.component';

describe('MensajesLazyComponent', () => {
  let component: MensajesLazyComponent;
  let fixture: ComponentFixture<MensajesLazyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensajesLazyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensajesLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
