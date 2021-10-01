import { ADD_CART, RMV_CART } from "./actionsType";

export const addCart = (product) => ({ type: ADD_CART, value: product });
export const rmvCart = (product) => ({ type: RMV_CART, value: product });
