import { BasketItem } from "../BasketItem";

import type { Category } from "../categories/Category";
import type { IProduct } from "./IProduct";

export abstract class Product implements IProduct {
  private _category: Category;
  private _imageUrl: string;
  private _name: string;
  private _price: number;
  private _upc: string;

  constructor(
    name: string,
    price: number,
    upc: string,
    imageUrl: string,
    category: Category
  ) {
    this._category = category;
    this._imageUrl = imageUrl;
    this._name = name;
    this._price = price;
    this._upc = upc;
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

  get imageUrl(): string {
    return this._imageUrl;
  }


  get category(): Category {
    return this._category;
  }

  set price(price: number) {
    if (price > 0) {
      this._price = price;
    }
  }

  intoBasketItem(quantity: number): BasketItem {
    return new BasketItem(this, quantity);
  }

  toString(): string {
    return `${this.name} - $${this.price}`;
  }
}
