import { Category } from "../categories/Category";
import { Product } from "./Product";

const breadCategory = new Category("Bread", "Bread products", "bread");
export class Bread extends Product {
  constructor() {
    super('Bread', 1.99, 'BIMBOBREAD', '/assets/bread.png', breadCategory);
  }
}
