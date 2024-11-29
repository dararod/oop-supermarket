export const Product = ({ price, name }: { price: number; name: string }) => {
  return (
    <div className="h-56 w-36 shadow-lg flex flex-col justify-end items-center p-2 gap-3 rounded">
      <div className="flex flex-col gap-1 justify-center items-center">
        <span className="font-semibold">{name}</span>
        <span>${price}</span>
      </div>
      <button className="flex justify-center items-center h-10 p-3 bg-red-600 text-white w-full rounded">
        Add to Cart
      </button>
    </div>
  );
};