import { FILTER_TYPE, SEARCH_PRODUCT } from "./actionsType";

export const filterProducts = (filterType) => ({
  type: FILTER_TYPE,
  value: filterType,
});

export const searchProducts = (product) => ({
  type: SEARCH_PRODUCT,
  value: product,
});
