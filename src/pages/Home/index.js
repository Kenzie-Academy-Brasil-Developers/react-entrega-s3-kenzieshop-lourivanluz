import { useSelector } from "react-redux";
import { ListProduct } from "../../components/ListProduct";

export const Home = () => {
  const { products } = useSelector((state) => state);
  return (
    <div>
      <h1>Produtos</h1>
      <ListProduct list={products} buyable={true} />
    </div>
  );
};
