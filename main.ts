import { Basket } from "./model/Basket";
import { Milk } from "./model/products/Milk";
import { PepsiSixPack } from "./model/products/PepsiSixPack";

const basket = Basket.empty();
const milk = new Milk();
const pepsiSixPack = new PepsiSixPack();

basket.addProduct(milk, 2);
basket.addProduct(milk, 2);


basket.addProduct(pepsiSixPack, 1);
basket.addProduct(pepsiSixPack, 3);
basket.print();

basket.removeItem(milk.upc)
basket.removeProduct(pepsiSixPack, 1)
basket.print();

// - Capacidad de verificar si dos productos son los mismos
// - Fusionar productos similares para que no se vean 2 veces
// - Capacidad de remover productos (Product)
// - Capacidad de cambiar cantidades de productos (quantity)
// - Agregar sub-total a BasketItem (método)
// - Agregar sub-total a (actualizar impl de print) [hint: `console.table`]
// - Agregar total a Basket (método)
