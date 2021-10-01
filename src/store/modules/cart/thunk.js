import { addCart, rmvCart } from "./actions";

export const addCartThunk = (product) => (dispath) => {
  dispath(addCart(product));
};

export const rmvCartThunk = (id) => (dispath, getStore) => {
  const { cart } = getStore();
  const listCard = cart.filter((item) => item.id !== id);

  dispath(rmvCart(listCard));
};
