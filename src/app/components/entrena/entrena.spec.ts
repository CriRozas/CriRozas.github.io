import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Entrena } from './entrena';

describe('Entrena', () => {
  let component: Entrena;
  let fixture: ComponentFixture<Entrena>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Entrena]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Entrena);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
