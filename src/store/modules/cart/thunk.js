import { addCart, rmvCart } from "./actions";

export const addCartThunk = (product) => (dispath) => {
  const list = JSON.parse(localStorage.getItem("cart")) || [];
  list.push(product);
  localStorage.setItem("cart", JSON.stringify(list));
  dispath(addCart(product));
};

export const rmvCartThunk = (id) => (dispath, getStore) => {
  const { cart } = getStore();
  const listCard = cart.filter((item) => item.id !== id);
  localStorage.setItem("cart", JSON.stringify(listCard));

  dispath(rmvCart(listCard));
};
