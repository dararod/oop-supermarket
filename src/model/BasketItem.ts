import type { IProduct } from "./products/IProduct";

export class BasketItem {
  public product: IProduct;
  public quantity: number;

  constructor(product: IProduct, quantity: number) {
    this.product = product;
    this.quantity = quantity;
  }

  public priceItem(): number {
    let total = this.product.price * this.quantity;
    return parseFloat(total.toFixed(2))
  }
}
