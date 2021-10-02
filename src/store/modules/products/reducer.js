import PRODUCTS from "../../../produtos";
import { FILTER_TYPE, SEARCH_PRODUCT } from "./actionsType";

const defultState = PRODUCTS;

export const productsReduce = (state = defultState, { type, value }) => {
  switch (type) {
    case FILTER_TYPE:
      return [...value];
    case SEARCH_PRODUCT:
      return [...value];
    default:
      return state;
  }
};
