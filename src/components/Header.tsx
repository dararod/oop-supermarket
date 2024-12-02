import { useBasket } from "../hooks/use-basket";

export const Header = () => {
  const { basket } = useBasket();
  return (
    <header className="bg-red-600 px-4 h-12 flex items-center justify-between">
      <a href="/">
        <h1 className="text-2xl text-white">OOP Supermarket</h1>
      </a>
      <div className="flex items-center gap-2">
        <a href="/basket" className="text-white font-semibold">Carrito</a>
      <div className="bg-red-700 text-white py-1 px-3 rounded font-semibold">
        <span>${basket.totalBasket()}</span>
      </div>
      </div>
    </header>
  );
};
