import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { HeaderStyled } from "./style";
import {
  filterProductsThunk,
  searchProductsThunk,
} from "../../store/modules/products/thunk";

import {
  BiSearchAlt,
  BiHomeSmile,
  BiCart,
  BiLogIn,
  BiMenu,
} from "react-icons/bi";
import logo from "../../assets/img";
import { useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import { userRegisterThunk } from "../../store/modules/user/thunk";

export const Header = () => {
  const history = useHistory();
  const dispath = useDispatch();
  const [search, setSearch] = useState("");
  const { user } = useSelector((state) => state);

  console.log(user)

  const handleFilter = (filterType) => {
    history.push("/");
    dispath(filterProductsThunk(filterType));
  };

  const handleSearch = (product) => {
    dispath(searchProductsThunk(product));
    history.push('/')
    setSearch("");
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = ()=>{
    const user = {
      nome: "",
      email: "",
      password: "",
    }
    dispath(userRegisterThunk(user))

  }

  return (
    <HeaderStyled>
      <div className="container">
        <div className="search">
          <div className="imgContainer">
            <img src={logo} alt="logo" />
          </div>
          <div className="inputHeader">
            <input
              type="text"
              placeholder="Buscar por..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              required
            />
            <span className="searchIcon">
              <BiSearchAlt />
            </span>
            <button onClick={() => handleSearch(search)}>
              <BiSearchAlt />
            </button>
          </div>
          <div className="menuBurger">
            <Button
              id="basic-button"
              aria-controls="basic-menu"
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <BiMenu className="menuButton" />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem
                onClick={() => {
                  history.push("/cart");
                  handleClose();
                }}
              >
                Carrinho
              </MenuItem>
              <MenuItem
                onClick={() => {
                  history.push("/");
                  handleClose();
                }}
              >
                Home
              </MenuItem>

              {!user.auth && (
                <MenuItem
                  onClick={() => {
                    history.push("/login");
                    handleClose();
                  }}
                >
                  Login
                </MenuItem>
              )}
              {user.auth && (
                <MenuItem
                  onClick={() => {
                    handleLogout()
                    localStorage.removeItem('user');
                    handleClose();
                  }}
                >
                  logout
                </MenuItem>
              )}

              <MenuItem
                onClick={() => {
                  handleFilter("tools");
                  handleClose();
                }}
              >
                Ferramenta
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleFilter("furniture");
                  handleClose();
                }}
              >
                Móveis
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleFilter("drink");
                  handleClose();
                }}
              >
                Bebida
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleFilter("sport");
                  handleClose();
                }}
              >
                Esporte
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleFilter("");
                  handleClose();
                }}
              >
                Todos Produtos
              </MenuItem>
            </Menu>
          </div>

          <div className="listNav pages">
            <ul>
              <li onClick={() => history.push("/cart")}>
                <BiCart className="icon" />
                <span>Carrinho</span>
              </li>
              <li onClick={() => history.push("/")}>
                <BiHomeSmile className="icon" />
                <span>Home</span>
              </li>
              {!user.auth && (
                <li onClick={() => history.push("/login")}>
                  <BiLogIn className="icon" />
                  <span>Login</span>
                </li>
              )}
              {user.auth && (
                <li
                  onClick={() => {
                    handleLogout()
                    localStorage.removeItem('user');
                  }}
                >
                  <BiLogIn className="icon" />
                  <span>Logout</span>
                </li>
              )}
            </ul>
          </div>
        </div>
        <div className="listNav category">
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
                <span onClick={() => handleFilter("furniture")}>Móveis</span>
              </li>
              <li>
                <span onClick={() => handleFilter("drink")}>Bebida</span>
              </li>
              <li>
                <span onClick={() => handleFilter("sport")}>Esporte</span>
              </li>
              <li>
                <span onClick={() => handleFilter("")}>Todos Produtos</span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </HeaderStyled>
  );
};
