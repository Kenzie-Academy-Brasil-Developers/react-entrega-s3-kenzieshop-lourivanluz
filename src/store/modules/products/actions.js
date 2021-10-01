import { FILTER_TYPE } from "./actionsType";

export const filterProducts = (filterType) => ({
  type: FILTER_TYPE,
  value: filterType,
});
