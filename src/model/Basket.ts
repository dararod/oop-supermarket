import { BasketItem } from "./BasketItem";

import type { IProduct } from "./products/IProduct";

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

  public removeItem(upc: string) {
    this.items.map((item) => {
      if (item.product.upc === upc) {
        const index = this.items.indexOf(item);
        this.items.splice(index, 1);
      } else {
        // UPC not found error
      }
    });
  }

  public addProduct(product: IProduct, quantity: number) {
    console.info(
      "\x1b[42m",
      "\x1b[30m",
      "ADDS",
      "\x1b[0m",
      product.toString(),
      quantity
    );
    let items = this.items;

    const productExistence = items.find(
      (item) => item.product.upc === product.upc
    );
    if (productExistence) {
      productExistence.quantity = productExistence.quantity + quantity;
    } else {
      this.addItem(new BasketItem(product, quantity));
    }
  }

  public removeProduct(product: IProduct, quantity: number) {
    console.info(
      "\x1b[41m",
      "\x1b[30m",
      "REMOVES",
      "\x1b[0m",
      product.toString(),
      quantity
    );
    let items = this.items;

    const productExistence = items.find(
      (item) => item.product.upc === product.upc
    );

    if (productExistence) {
      if (productExistence.quantity - quantity > 0) {
        productExistence.quantity = productExistence.quantity - quantity;
      } else if (productExistence.quantity - quantity === 0) {
        this.removeItem(product.upc)
      }
    } else {
      // Product to remove not found
    }
  }

  public totalBasket(): number {
    let total: number = 0;
    this.items.map((item) => {
      total = total + item.priceItem()
    });

    return total;
  }

  public print(): void {
    console.table(
      this.items.map((bitem) => ({
        name: bitem.product.name,
        price: bitem.product.price,
        quantity: bitem.quantity,
        total: bitem.priceItem(),
      }))
    );
    console.info("The total amount for your purchase is " + this.totalBasket())
  }

  public clone(): Basket {
    return new Basket([...this.items], this.discount);
  }
}
