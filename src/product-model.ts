export class Product {
  private title: string;
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