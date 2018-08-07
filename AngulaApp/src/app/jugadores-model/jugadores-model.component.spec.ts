import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JugadoresModelComponent } from './jugadores-model.component';

describe('JugadoresModelComponent', () => {
  let component: JugadoresModelComponent;
  let fixture: ComponentFixture<JugadoresModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JugadoresModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JugadoresModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
