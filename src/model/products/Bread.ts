import { Product } from "./Product";

export class Bread extends Product {
  constructor() {
    super('Bread', 1.99, 'BIMBOBREAD', '/assets/bread.png');
  }
}
