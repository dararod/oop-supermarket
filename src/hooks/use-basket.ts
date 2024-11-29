import { useContext } from "react";

import BasketContext from "../context/BasketContext";

import type { BasketContextValue } from "../context/BasketContext";

export const useBasket = (): BasketContextValue => {
    const basketContext = useContext(BasketContext);
    return basketContext;
}
