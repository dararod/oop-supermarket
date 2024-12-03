import { useBasket } from "../hooks/use-basket";
import { BasketItem } from "../model/BasketItem";
import { Basket } from "../model/Basket";

import type { IProduct } from "../model/products/IProduct";
export const Product = (props: { product: IProduct }) => {
  const { addToBasket } = useBasket();
  
  return (
    <div className="h-56 w-36 shadow-lg flex flex-col justify-end items-center p-2 gap-3 rounded">
      <div className="flex flex-col gap-1 justify-center items-center">
        <img className="size-20" src={props.product.imageUrl} alt="product image" />
        <span className="font-semibold">{props.product.name}</span>
        <span>${props.product.price}</span>
      </div>
      <button
        className="flex justify-center items-center h-10 p-3 bg-red-600 text-white font-semibold w-full rounded"
        type="button"
        onClick={() => addToBasket(new BasketItem(props.product, 1))}
      >
        Add to Cart
      </button>
    </div>
  );
};
