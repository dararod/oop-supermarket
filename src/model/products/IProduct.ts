export interface IProduct {
  name: string;
  price: number;
  imageUrl: string;
  upc: string;
  toString(): string;
}
