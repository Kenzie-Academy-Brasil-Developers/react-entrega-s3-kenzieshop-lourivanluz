import { addProduct } from "./actions";

const addProductThunk = (product) => (dispath, getStore) => {
  const list = getStore();
  product.id = list.length;

  dispath(addProduct(product));
};

export default addProductThunk;
