import { Header } from "./Header";
import { useBasket } from "../hooks/use-basket";

export const Basket = () => {
  const { basket } = useBasket();
  return (
    <main className="h-screen">
      <Header />
      <div className="flex h-full items-center justify-center">
        <div className="bg-zinc-300/20 h-96 w-96 flex flex-col items-center p-2 rounded-md">
        <div className="flex justify-between">
          <span>Shopping Cart</span>
          <span>${basket.totalBasket()}</span>
        </div>
          {basket.items.map((item, index) => (
            <div key={`${item.product.upc}-${index}`}>
              <span>{item.product.name}</span>
              <span>{item.quantity}</span>
              <span>${item.priceItem()}</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};
