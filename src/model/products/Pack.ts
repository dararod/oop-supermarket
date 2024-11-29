import { Product } from "./Product";

export abstract class Pack extends Product {
  public readonly quantity: number;
  public readonly unitPrice: number;

  constructor(name: string, quantity: number, unitPrice: number, upc: string) {
    super(name, quantity * unitPrice, upc);

    this.quantity = quantity;
    this.unitPrice = unitPrice;
    this.price = quantity * unitPrice;
  }

  override toString(): string {
    return `${this.name} - $${this.price} (${this.quantity} * ${this.unitPrice})`;
  }
}
