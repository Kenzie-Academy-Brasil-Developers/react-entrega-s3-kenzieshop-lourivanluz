import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCartThunk, rmvCartThunk } from "../../store/modules/cart/thunk";
import { DivStyled } from "./style";
import { toast } from "react-toastify";

export const Card = ({ item, buyable }) => {
  const dispath = useDispatch();
  const addCart = (product) => {
    toast.success("Produto adicionado no carrinho");
    dispath(addCartThunk(product));
  };

  const rmvCart = (productID) => {
    dispath(rmvCartThunk(productID));
  };
  const [itemName, setItemName] = useState(item.name);

  const { price, img, id } = item;

  if (itemName.length > 60) {
    setItemName(`${itemName.substring(0, 57)}...`);
  }

  const formatCurrency = (Price, language, currencyType) => {
    const formatedCurrency = Number(Price).toLocaleString(language, {
      style: "currency",
      currency: currencyType,
    });
    return formatedCurrency;
  };

  const parcelPrice = (price, interest, parcel, callBackFormatCurrency) => {
    const _interest = (interest / 100) * price;
    const parcelPrice = (Number(price) + _interest) / parcel;
    const formatedParcelPrice = callBackFormatCurrency(
      parcelPrice,
      "pt-br",
      "BRL"
    );
    return formatedParcelPrice;
  };

  const parcel = 12;
  const formatedPrice = formatCurrency(price, "pt-br", "BRL");
  const formatedParcelPrice = parcelPrice(price, 2, parcel, formatCurrency);

  return (
    <>
      {buyable && (
        <DivStyled>
          <div className="imgContainer">
            <img src={img} alt="img" />
          </div>
          <h3>{itemName}</h3>
          <p>
            {"À vista por "}
            <span>{formatedPrice}</span>
          </p>
          <p>
            {`ou até ${parcel}x de `}
            <span>{formatedParcelPrice}</span>
          </p>
          <button onClick={() => addCart(item)}>Comprar</button>
        </DivStyled>
      )}

      {!buyable && (
        <DivStyled>
          <div className="imgContainer">
            <img src={img} alt="img" />
          </div>
          <h3>{itemName}</h3>
          <div>
            <p>{`À vista por ${formatedPrice}`}</p>
            <p>{`ou até ${parcel}x de ${formatedParcelPrice}`}</p>
          </div>
          <button onClick={() => rmvCart(id)}>excluir</button>
        </DivStyled>
      )}
    </>
  );
};
