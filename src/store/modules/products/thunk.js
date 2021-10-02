import PRODUCTS from "../../../produtos";
import { toast } from "react-toastify";
import { filterProducts, searchProducts } from "./actions";

export const filterProductsThunk = (filterType) => (dispath) => {
  const filtred = PRODUCTS.filter((item) => item.category === filterType);

  dispath(filterProducts(filterType ? filtred : PRODUCTS));
};

export const searchProductsThunk = (product) => (dispath) => {
  const filtred = PRODUCTS.filter((item) => item.tags.includes(product));
  if (filtred.length === 0) {
    toast.error("Nem um produto encontrado");
  }
  dispath(searchProducts(filtred.length >= 1 ? filtred : PRODUCTS));
};
