import { IProduct } from "./products/IProduct";

export class BasketItem {
  public product: IProduct;
  public quantity: number;

  constructor(product: IProduct, quantity: number) {
    this.product = product;
    this.quantity = quantity;
  }
}
