import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { cartReduce } from "./modules/cart/reducer";
import { productsReduce } from "./modules/products/reducer";

const reduces = combineReducers({
  products: productsReduce,
  cart: cartReduce,
});

const store = createStore(reduces, applyMiddleware(thunk));

export default store;
