import { useSelector } from "react-redux";
import { ListProduct } from "../../components/ListProduct";
import { DivCart } from "./style";

export const Cart = () => {
  const { cart } = useSelector((state) => state);

  const totalPrice = cart
    .reduce((acc, item) => Number(item.price) + acc, 0)
    .toFixed(2);
  const parcel = 12;
  const _interest = (2 / 100) * totalPrice;
  const parcelPrice = (Number(totalPrice) + _interest) / parcel;

  const formatCurrency = Number(totalPrice).toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  const formatedParcelPrice = Number(parcelPrice).toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <DivCart>
      <div className="productlist">
        <h1>Carrinho</h1>
        <ListProduct list={cart} buyable={false} />
      </div>
      <div className="informPrice">
        <div className="cardPrice">
          <p>{`Total de produtos ${cart.length}`}</p>
          <p>
            {`O valor total de `}
            <br />
            <span>{formatCurrency}</span>
            {` a vista`}
          </p>
          <p>
            {`Ou ${parcel}x de `}
            <span>{formatedParcelPrice}</span>
          </p>
        </div>
      </div>
    </DivCart>
  );
};
