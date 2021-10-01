import { Card } from "../Card";
export const ListProduct = ({ list, buyable }) => {
  return (
    <ul>
      {list?.map((item, index) => (
        <li key={index}>
          <Card item={item} buyable={buyable} />
        </li>
      ))}
    </ul>
  );
};
