import PRODUCTS from "../../../produtos";
import { _PRODUCTS } from "./actionsType";
const defultState = PRODUCTS;
export const productsReduce = (state = defultState, { type, value }) => {
  switch (type) {
    case _PRODUCTS:
      return [...state, value];

    default:
      return state;
  }
};
