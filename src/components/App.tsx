import { Header } from "./Header";
import { Product } from "./Product";
import { Milk } from "../model/products/Milk";
import { PepsiSixPack } from "../model/products/PepsiSixPack";
import { Bread } from "../model/products/Bread";

import type { IProduct } from "../model/products/IProduct";

const CATALOG: IProduct[] = [new Bread(), new Milk(), new PepsiSixPack()];

export const App = () => {
  return (
    <main>
      <Header />
      <section className="p-4 flex">
        {
          CATALOG.map((product) => (
            <Product 
              product={product}
            />
          ))
        }
      </section>
    </main>
  );
};
