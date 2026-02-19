import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosFisioterapia } from './servicios-fisioterapia';

describe('ServiciosFisioterapia', () => {
  let component: ServiciosFisioterapia;
  let fixture: ComponentFixture<ServiciosFisioterapia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiciosFisioterapia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiciosFisioterapia);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
