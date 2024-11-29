import type { IProduct } from "./IProduct";

export abstract class Product implements IProduct {
  private _name: string;
  private _price: number;
  private _upc: string;

  constructor(name: string, price: number, upc: string) {
    this._name = name;
    this._price = price;
    this._upc = upc
  }

  get name(): string {
    return this._name;
  }

  get price(): number {
    return this._price;
  }

  get upc(): string {
    return this._upc;
  }

  set price(price: number) {
    if (price > 0) {
      this._price = price;
    }
  }

  toString(): string {
    return `${this.name} - $${this.price}`;
  }
}
