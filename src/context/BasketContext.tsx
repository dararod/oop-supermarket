import { createContext, useState } from 'react';

import { Basket } from '../model/Basket';

import type { BasketItem } from '../model/BasketItem';

export type BasketContextValue = {
    basket: Basket;
    addToBasket(bi: BasketItem): void;
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
        next.addItem(bi);
        setBasket(next);

        localStorage.setItem('basket', next.serialize());
    }

    return (
        <BasketContext.Provider value={{
            basket,
            addToBasket,
        }}>
            {props.children}
        </BasketContext.Provider>
    );
};

export default BasketContext;
