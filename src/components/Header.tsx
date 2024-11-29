import { useBasket } from "../hooks/use-basket";
import { Basket } from "../model/Basket";

export const Header = () => {
  const { basket } = useBasket();
    return (
      <header className="bg-red-600 px-4 h-12 flex items-center justify-between">
        <h1 className="text-2xl text-white">
          OOP Supermarket
        </h1>
        <div className="bg-red-700 text-white py-1 px-3 rounded">
          <span>${basket.totalBasket()}</span>
        </div>
      </header>
    );
  };
  