import { useSelector } from "react-redux";
import { ListProduct } from "../../components/ListProduct";

export const Cart = () => {
  const { cart } = useSelector((state) => state);
  const totalPrice = cart.reduce((acc, item) => Number(item.price) + acc, 0);
  return (
    <div>
      <h1>Cart</h1>
      <ListProduct list={cart} buyable={false} />
      <div>
        <p>{`O preço total ${totalPrice.toFixed(2)}`}</p>
      </div>
    </div>
  );
};
