import { Header } from "./Header";
import { useBasket } from "../hooks/use-basket";
import { BasketItem } from "../model/BasketItem";

export const Basket = () => {
  const { basket, addToBasket, removeOneFromBasket, removeProductFromBasket } =
    useBasket();
  return (
    <main className="h-screen">
      <Header />
      <div className="flex h-full items-center justify-center">
        <div className="bg-zinc-300/20 h-96 w-[400px] flex flex-col items-center px-6 py-4 rounded-md">
          <div className="flex justify-start w-full">
            <span>Order</span>
          </div>
          {basket.items.map((item, index) => (
            <div
              className="grid grid-cols-3 gap-3 w-full py-1"
              key={`${item.product.upc}-${index}`}
            >
              <span className="col-span-1">{item.product.name}</span>
              <div className="flex gap-2 justify-center">
                <button
                  onClick={() => removeOneFromBasket(item)}
                  className="px-1 bg-zinc-300/50 border border-zinc-500 rounded"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => addToBasket(new BasketItem(item.product, 1))}
                  className="px-1 bg-zinc-300/50 border border-zinc-500 rounded"
                >
                  +
                </button>
              </div>
              <div className="flex gap-2 justify-self-end">
                <span>${item.priceItem()}</span>
                <button
                  onClick={() => removeProductFromBasket(item.product.upc)}
                  className="col-span-1 bg-red-400 border border-red-600 text-white px-2  rounded"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};
