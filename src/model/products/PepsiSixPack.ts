import { Category } from "../categories/Category";
import { Pack } from "./Pack";

const sodaCategory = new Category("Soda", "Soda products", "soda");
export class PepsiSixPack extends Pack {
  constructor() {
    super("Pepsi Six Pack", 6, 4.99, "PEPSI6PACK", '/assets/soda.png', sodaCategory);
  }
}
