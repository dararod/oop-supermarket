import { Header } from "./Header";
import { Product } from "./Product";

export const App = () => {
  return (
    <main>
      <Header />
      <section className="p-4">
        <Product 
          price={5.99}
          name="Milk"
        />
      </section>
    </main>
  );
};
