import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Diferenciales } from './diferenciales';

describe('Diferenciales', () => {
  let component: Diferenciales;
  let fixture: ComponentFixture<Diferenciales>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Diferenciales]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Diferenciales);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
