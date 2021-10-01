import { useDispatch } from "react-redux";
import { addCartThunk, rmvCartThunk } from "../../store/modules/cart/thunk";

export const Card = ({ item, buyable }) => {
  const dispath = useDispatch();
  const addCart = (product) => {
    dispath(addCartThunk(product));
  };

  const rmvCart = (productID) => {
    dispath(rmvCartThunk(productID));
  };

  return (
    <div>
      <img src={item.img} alt="img" />
      <h3>{item.name}</h3>
      <p>{item.price}</p>
      {buyable && <button onClick={() => addCart(item)}>Comprar</button>}
      {!buyable && <button onClick={() => rmvCart(item.id)}>excluir</button>}
    </div>
  );
};
