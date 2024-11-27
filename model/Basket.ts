import { BasketItem } from "./BasketItem";
import { IProduct } from "./products/IProduct";

export class Basket {
  public discount: number;
  public items: BasketItem[];

  constructor(items: BasketItem[], discount: number) {
    this.items = items;
    this.discount = discount;
  }

  static empty(): Basket {
    return new Basket([], 0);
  }

  static withItems(items: BasketItem[]) {
    return new Basket(items, 0);
  }

  public addItem(item: BasketItem) {
    this.items.push(item);
  }

  public addProduct(product: IProduct, quantity: number) {
    console.info('\x1b[42m', '\x1b[30m', 'ADDS', '\x1b[0m', product.toString());
    this.addItem(new BasketItem(product, quantity));
  }

  public print(): void {
    console.table(
      this.items.map((bitem) => ({
        name: bitem.product.name,
        price: bitem.product.price,
        quantity: bitem.quantity,
      })),
    );
  }
}
