import { Header } from "./Header";
import { useBasket } from "../hooks/use-basket";
import type { BasketItem } from "../model/BasketItem";

export const Basket = () => {
  const { basket, addToBasket, removeOneFromBasket, removeProductFromBasket } = useBasket();
  console.log(basket);
  return (
    <main className="h-screen">
      <Header />
      <div className="flex h-full items-center justify-center">
        <div className="bg-zinc-300/20 h-96 w-96 flex flex-col items-center px-6 py-4 rounded-md">
          <div className="flex justify-start w-full">
            <span>Order</span>
          </div>
          {basket.items.map((item, index) => (
            <div
              className="grid grid-cols-3 gap-3 w-full"
              key={`${item.product.upc}-${index}`}
            >
              <span className="col-span-1">{item.product.name}</span>
                <div className="flex gap-2 justify-center">
                  <button onClick={() => removeOneFromBasket(item)} className="px-1 bg-zinc-300/50 border border-zinc-500 rounded">-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => addToBasket(item)} className="px-1 bg-zinc-300/50 border border-zinc-500 rounded">+</button>
                </div>
                <span className="justify-self-end">${item.priceItem()}</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};
