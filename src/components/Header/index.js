import { useHistory } from "react-router";
import { HeaderStyled } from "./style";

export const Header = () => {
  const history = useHistory();

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
                <span>Eletronico</span>
              </li>
              <li>
                <span>Ferramenta</span>
              </li>
              <li>
                <span>moveis</span>
              </li>
              <li>
                <span>Bebida</span>
              </li>
              <li>
                <span>esporte</span>
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
