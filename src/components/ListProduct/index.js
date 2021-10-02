import { Card } from "../Card";
import { UlStyled } from "./style";
export const ListProduct = ({ list, buyable }) => {
  return (
    <UlStyled>
      {list?.map((item, index) => (
        <li key={index}>
          <Card item={item} buyable={buyable} />
        </li>
      ))}
    </UlStyled>
  );
};
