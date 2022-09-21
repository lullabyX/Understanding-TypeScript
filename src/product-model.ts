import {IsNotEmpty, IsPositive} from 'class-validator'

export class Product {
  @IsNotEmpty()
  private title: string;
  @IsPositive()
  private price: number;

  constructor (t: string, p: number) {
    this.title = t;
    this.price = p; 
  }

  getInformation() {
    return {
      name: this.title,
      price: `$${this.price}`
    }
  }
}