import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formulaio } from './formulaio';

describe('Formulaio', () => {
  let component: Formulaio;
  let fixture: ComponentFixture<Formulaio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Formulaio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Formulaio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
