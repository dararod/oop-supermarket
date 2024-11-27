import { IProduct } from "./IProduct";

export abstract class Product implements IProduct {
  private _name: string;
  private _price: number;

  constructor(name: string, price: number) {
    this._name = name;
    this._price = price;
  }

  get name(): string {
    return this._name;
  }

  get price(): number {
    return this._price;
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
