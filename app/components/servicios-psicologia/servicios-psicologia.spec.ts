import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosPsicologia } from './servicios-psicologia';

describe('ServiciosPsicologia', () => {
  let component: ServiciosPsicologia;
  let fixture: ComponentFixture<ServiciosPsicologia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiciosPsicologia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiciosPsicologia);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
