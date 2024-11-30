import { useBasket } from "../hooks/use-basket";
import ShoppingCart from '~icons/custom/shopping-cart';

export const Header = () => {
  const { basket } = useBasket();
  return (
    <header className="bg-red-600 px-4 h-12 flex items-center justify-between">
      <a href="/">
        <h1 className="text-2xl text-white">OOP Supermarket</h1>
      </a>
      <div className="bg-red-700 text-white py-1 px-3 rounded font-semibold">
        <ShoppingCart />
        <span>${basket.totalBasket()}</span>
      </div>
    </header>
  );
};
