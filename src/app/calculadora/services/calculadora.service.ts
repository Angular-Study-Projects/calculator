/**
 * Service responsible of execute the calculator operation
 * 
 * @author Leonardo Goulart<leonardo@roffor.com.br>
 * @since 1.0.0
 */


import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  /**
   * Consts definitions to identify the operations
   */
  static readonly SUM: string = '+';
  static readonly SUBTRACTION: string = '-';
  static readonly DIVISION: string = '/';
  static readonly MULTIPLICATION: string = '*';

  constructor() { }

  /**
   * Given two numbers, this method operate them.
   * Support to operation such as: sum, subtraction, divsion and multiplication
   * 
   * @param num1 number
   * @param num2 number
   * @param operation string Operation to execute
   * @return number Operation result
   */

   calcular( num1: number, num2: number, operation: string ): number {
      
      // variables declare with let are only local
      let result: number; // store operation result

      switch( operation ) {
        case CalculadoraService.SUM:
          result = num1 + num2;
          break;
        case CalculadoraService.SUBTRACTION:
          result = num1 - num2;
          break;
        case CalculadoraService.DIVISION:
          result = num1 / num2;
          break;
        case CalculadoraService.MULTIPLICATION:
          result = num1 * num2;
          break;
        default: 
          result = 0;
      }

      return result;
   }

}
