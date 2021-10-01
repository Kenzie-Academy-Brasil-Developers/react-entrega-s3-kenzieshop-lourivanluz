import PRODUCTS from "../../../produtos";
import { FILTER_TYPE } from "./actionsType";

const defultState = PRODUCTS;

export const productsReduce = (state = defultState, { type, value }) => {
  switch (type) {
    case FILTER_TYPE:
      return [...value];
    default:
      return state;
  }
};
