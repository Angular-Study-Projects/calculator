import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from "../services";

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  private number1: string;
  private number2: string;
  private result: number;
  private operation: string;

  constructor(private calculadoraService: CalculadoraService) { }

  ngOnInit() {
    this.clean();  
  }

  /**
   * Clear display and values
   * 
   * @return void
   */
  clean() {
    this.number1 = '0';
    this.number1 = null;
    this.result = null;
    this.operation = null;
  }

  /**
   * Add select number to be calculated later
   * 
   * @param string number
   * @return void
   */
  addNumber(number: string): void{
    this.operation === null  ? this.number1 = this.concatenateNumber(this.number1, number) : this.number2 = this.concatenateNumber(this.number2, number);
  }

  /**
   * Return concatenated values. treat decimal split
   * 
   * @param string currentNumber
   * @param string concatenatedNumber
   * @return string
   */
  concatenateNumber( currentNumber: string, concatenatedNumber: string ): string {
    // if contains 0 or null, reboot the value 
    if ( currentNumber === '0' || currentNumber === 'null' )
      currentNumber = '';

    // if first digit is '.' concatenate before dot
    if ( concatenatedNumber === '.' && currentNumber === '' )
      return '0.';
    
    // case '.' written already contains a dor, just return it
    if ( concatenatedNumber === '.' && currentNumber.indexOf('.') > -1)
      return currentNumber;

    return currentNumber + concatenatedNumber;
  }

  /**
   * Execute the logic when the operator is selected.
   * In case of a operation is already selected, execute the last operation and define th new operation
   * 
   * @param string operation
   * @return void
   */
  defineOperation ( operation: string ): void {
    // Just define the operation if its not define yet
    if ( this.operation === null ) {
      this.operation = operation;
      return;
    } 

    // In case the operation is already define and number2 selected, operate both number1 and number2     
    if ( this.number2 !== null ) {
      this.result = this.calculadoraService.calcular(
        parseFloat(this.number1),
        parseFloat(this.number2),
        this.operation);
      this.operation = operation;
      this.number1 = this.result.toString();
      this.number2 = null;
      this.result = null; 
    }
  }

  /**
   * Calculate an operation
   * 
   * @return void
   */
  calculate(): void {
    this.number2 === null ? null : this.result = this.calculadoraService.calcular(parseFloat(this.number1),
                                                                                    parseFloat(this.number2),
                                                                                    this.operation);
  }

  /**
   * Return value to be displayed on calculator screen
   * 
   * @return string
   */
  get display(): string {
    if ( this.result !== null ) {
      return this.result.toString();
    }
    if  ( this.number2 !== null ) {
      return this.number2;
    }
    return this.number1;

  }
  


}
