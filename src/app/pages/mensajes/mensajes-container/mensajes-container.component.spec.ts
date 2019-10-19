import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajesContainerComponent } from './mensajes-container.component';

describe('MensajesContainerComponent', () => {
  let component: MensajesContainerComponent;
  let fixture: ComponentFixture<MensajesContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensajesContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensajesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
