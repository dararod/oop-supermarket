import { useBasket } from "../hooks/use-basket";

import { BasketItem } from "../model/BasketItem";
import { Milk } from "../model/products/Milk";

export const Product = ({ price, name }: { price: number; name: string }) => {
  const { addToBasket } = useBasket();
  const milk = new Milk();

  return (
    <div className="h-56 w-36 shadow-lg flex flex-col justify-end items-center p-2 gap-3 rounded">
      <div className="flex flex-col gap-1 justify-center items-center">
        <span className="font-semibold">{name}</span>
        <span>${price}</span>
      </div>
      <button
        className="flex justify-center items-center h-10 p-3 bg-red-600 text-white font-semibold w-full rounded"
        type="button"
        onClick={() => addToBasket(new BasketItem(milk, 1))}
      >
        Add to Cart
      </button>
    </div>
  );
};
