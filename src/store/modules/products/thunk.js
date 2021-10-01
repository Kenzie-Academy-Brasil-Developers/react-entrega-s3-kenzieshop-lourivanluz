import PRODUCTS from "../../../produtos";
import { filterProducts } from "./actions";

export const filterProductsThunk = (filterType) => (dispath) => {
  const Filtred = PRODUCTS.filter((item) => item.category === filterType);

  dispath(filterProducts(filterType ? Filtred : PRODUCTS));
};
