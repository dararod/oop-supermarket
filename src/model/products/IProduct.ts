import type { Category } from "../categories/Category";

export interface IProduct {
  category: Category;
  name: string;
  price: number;
  imageUrl: string;
  upc: string;
  toString(): string;
}
