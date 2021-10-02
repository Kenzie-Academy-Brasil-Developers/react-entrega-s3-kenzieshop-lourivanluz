import { ADD_CART, RMV_CART } from "./actionsType";

const defultCart = JSON.parse(localStorage.getItem("cart")) || [];

export const cartReduce = (state = defultCart, { type, value }) => {
  switch (type) {
    case ADD_CART:
      return [...state, value];

    case RMV_CART:
      return [...value];

    default:
      return state;
  }
};
