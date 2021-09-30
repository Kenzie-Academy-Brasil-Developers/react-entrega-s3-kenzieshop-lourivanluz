import { addCart, rmvCart } from "./actions";

export const addCartThunk = (product) => (dispath) => {
  dispath(addCart(product));
};

export const rmvCartThunk = (product) => (dispath) => {
  dispath(rmvCart(product));
};
