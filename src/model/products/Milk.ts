import { Category } from "../categories/Category";
import { Product } from "./Product";

const dairyCategory = new Category("Dairy", "Dairy products", "dairy");
export class Milk extends Product {
  constructor() {
    super("Milk", 2.99, "MILK1L", '/assets/milk.png', dairyCategory);
  }
}
