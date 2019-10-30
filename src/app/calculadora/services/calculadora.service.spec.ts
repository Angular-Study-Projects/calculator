import { TestBed, inject } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalculadoraService = TestBed.get(CalculadoraService);
    expect(service).toBeTruthy();
  });

  it('must ensure that 1 + 4 = 5',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let sum = service.calcular(1, 4, CalculadoraService.SUM);
      expect(sum).toEqual(5);
    })
  );

  it('must ensure that 8 - 1 = 7',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let sub = service.calcular(8, 1, CalculadoraService.SUBTRACTION);
      expect(sub).toEqual(7);
    })
  );

  it('must ensure that 1 / 4 = 0.25',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let div = service.calcular(1, 4, CalculadoraService.DIVISION);
      expect(div).toEqual(0.25);
    })
  );

  it('must ensure to return 0 default',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let def = service.calcular(2, 4, '%');
      expect(def).toEqual(0);
    })
  );



});
