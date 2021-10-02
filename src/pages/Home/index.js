import { useSelector } from "react-redux";
import { ListProduct } from "../../components/ListProduct";
import { DivHome } from "./style";

export const Home = () => {
  const { products } = useSelector((state) => state);
  return (
    <DivHome>
      <h1>Produtos</h1>
      <ListProduct list={products} buyable={true} />
    </DivHome>
  );
};
