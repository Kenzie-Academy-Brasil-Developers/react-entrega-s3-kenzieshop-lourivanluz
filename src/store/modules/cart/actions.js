import { ADD_CART, RMV_CART } from "./actionsType";

export const addCart = (product) => ({ type: ADD_CART, product });
export const rmvCart = (product) => ({ type: RMV_CART, product });
