import { describe, expect, it } from 'vitest';

import { Basket } from '../../src/model/Basket';
import { Bread } from '../../src/model/products/Bread';
import { Milk } from '../../src/model/products/Milk';
import { PepsiSixPack } from '../../src/model/products/PepsiSixPack';

describe('Basket', () => {
  it('converts basket from and to json preserving Product Classes', () => {
    const bread = new Bread();
    const milk = new Milk();
    const pepsiSixPack = new PepsiSixPack();
    const basket = Basket.empty();

    basket.addProduct(bread, 1);
    basket.addProduct(milk, 2);
    basket.addProduct(pepsiSixPack, 1);
    basket.discount = 10;

    const asJson = basket.serialize();

    expect(typeof asJson).toStrictEqual('string');

    const asBasket = Basket.deserialize(asJson);

    expect(asBasket.discount).toStrictEqual(10);
    expect(asBasket.items.length).toStrictEqual(3);
    expect(asBasket.items[0].product.name).toStrictEqual('Bread');
    expect(asBasket.items[1].product.name).toStrictEqual('Milk');
    expect(asBasket.items[2].product.name).toStrictEqual('Pepsi Six Pack');
  });
});
