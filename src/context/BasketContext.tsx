import { createContext, useState } from 'react';

import { Basket } from '../model/Basket';

import type { BasketItem } from '../model/BasketItem';

export type BasketContextValue = {
    basket: Basket;
    addToBasket(bi: BasketItem): void;
}

export const BasketContext = createContext<BasketContextValue>({} as BasketContextValue);

export function BasketContextProvider(props: { children: JSX.Element }): JSX.Element {
    const [basket, setBasket] = useState(Basket.empty());

    const addToBasket = (bi: BasketItem) => {
        const next = basket.clone();
        next.addItem(bi);
        setBasket(next);
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
