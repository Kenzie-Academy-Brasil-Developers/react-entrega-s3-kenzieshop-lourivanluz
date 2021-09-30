import { useDispatch, useSelector } from "react-redux";

export const Home = () => {
  const { products } = useSelector((state) => state);
  console.log(products);
  return <div>Home</div>;
};
