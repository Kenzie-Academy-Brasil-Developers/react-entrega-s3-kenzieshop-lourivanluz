import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ListProduct } from "../../components/ListProduct";
import { DivCart, SpanStyled } from "./style";

export const Cart = () => {
  const {
    cart,
    user: { auth },
  } = useSelector((state) => state);

  const totalPrice = cart
    .reduce((acc, item) => Number(item.price) + acc, 0)
    .toFixed(2);

  const [priceDiscounted, setPriceDisconted] = useState(0);
  const parcel = 12;
  const _interest = (2 / 100) * totalPrice;
  const _discount = (5 / 100) * totalPrice;
  const parcelPrice = (Number(totalPrice) + _interest) / parcel;

  useEffect(() => {
    if (auth) {
      setPriceDisconted(
        Number(totalPrice - _discount).toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })
      );
    }
  }, [_discount]);

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
            <SpanStyled auth={auth}>{formatCurrency}</SpanStyled>
            <br />
            {auth && <SpanStyled>{priceDiscounted}</SpanStyled>}
            {` a vista`}
          </p>
          <p>
            {`Ou ${parcel}x de `}
            <SpanStyled>{formatedParcelPrice}</SpanStyled>
          </p>
        </div>
      </div>
    </DivCart>
  );
};
