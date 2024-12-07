import { createContext, useState } from 'react';

import { Basket } from '../model/Basket';

import type { BasketItem } from '../model/BasketItem';

export type BasketContextValue = {
    basket: Basket;
    addToBasket(bi: BasketItem): void;
    removeOneFromBasket(bi: BasketItem): void;
    removeProductFromBasket(bi: BasketItem): void;
}

export const BasketContext = createContext<BasketContextValue>({} as BasketContextValue);

function loadLocalBasketOrDefault(): Basket {
    const json = localStorage.getItem('basket');
    return json ? Basket.deserialize(json) : Basket.empty();
}

export function BasketContextProvider(props: { children: JSX.Element }): JSX.Element {
    const [basket, setBasket] = useState(loadLocalBasketOrDefault());

    const addToBasket = (bi: BasketItem) => {
        const next = basket.clone();
        const productExistence = next.items.find(
            (item) => item.product.upc === bi.product.upc
          );
          if (productExistence) {
            productExistence.quantity = productExistence.quantity + 1;
          } else {
            next.addItem(bi);
          }
        setBasket(next);

        localStorage.setItem('basket', next.serialize());
    }

    const removeOneFromBasket = (bi: BasketItem) => {
        const next = basket.clone();
        next.removeOneItem(bi);
        setBasket(next);

        localStorage.setItem('basket', next.serialize());
    }

    const removeProductFromBasket = (bi: BasketItem) => {
        const next = basket.clone();
        const productExistence = next.items.find(
            (item) => item.product.upc === bi.product.upc
          );
          if (productExistence && productExistence.quantity - 1 > 0) {
            productExistence.quantity = productExistence.quantity - bi.quantity;
          } else {
            next.addItem(bi);
          }
        setBasket(next);

        localStorage.setItem('basket', next.serialize());
    }

    return (
        <BasketContext.Provider value={{
            basket,
            addToBasket,
            removeOneFromBasket,
            removeProductFromBasket
        }}>
            {props.children}
        </BasketContext.Provider>
    );
};

export default BasketContext;
