import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { HeaderStyled } from "./style";
import { filterProductsThunk } from "../../store/modules/products/thunk";
export const Header = () => {
  const history = useHistory();
  const dispath = useDispatch();

  const handleFilter = (filterType) => {
    history.push("/");
    dispath(filterProductsThunk(filterType));
  };

  return (
    <HeaderStyled>
      <div className="container">
        <div className="search">
          <img src="" /> <input type="text" />
          <button>buscar</button>
        </div>
        <div className="category">
          <nav>
            <ul>
              <li>
                <span onClick={() => handleFilter("electronic")}>
                  Eletronico
                </span>
              </li>
              <li>
                <span onClick={() => handleFilter("tools")}>Ferramenta</span>
              </li>
              <li>
                <span onClick={() => handleFilter("furniture")}>moveis</span>
              </li>
              <li>
                <span onClick={() => handleFilter("drink")}>Bebida</span>
              </li>
              <li>
                <span onClick={() => handleFilter("sport")}>esporte</span>
              </li>
              <li>
                <span onClick={() => handleFilter("")}>Todos produtos</span>
              </li>
            </ul>
          </nav>
          <div>
            <ul>
              <li>
                <span onClick={() => history.push("/cart")}>carrinho</span>
              </li>
              <li>
                <span onClick={() => history.push("/")}>Home</span>
              </li>
              <li>
                <span>cadastrar</span>
              </li>
              <li>
                <span>login</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </HeaderStyled>
  );
};
