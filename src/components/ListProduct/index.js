import { Card } from "../Card";
export const ListProduct = ({ list }) => {
  return (
    <ul>
      {list?.map((item, index) => (
        <li>
          <Card item={item} />
        </li>
      ))}
    </ul>
  );
};
