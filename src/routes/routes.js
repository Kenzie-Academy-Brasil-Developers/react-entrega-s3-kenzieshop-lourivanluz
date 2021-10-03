import { Route, Switch } from "react-router-dom";
import { Cart } from "../pages/Cart";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path={"/"}>
        <Home />
      </Route>
      <Route path={"/cart"}>
        <Cart />
      </Route>
      <Route path={"/login"}>
        <Login />
      </Route>
      <Route path={"/register"}>
        <Register />
      </Route>
    </Switch>
  );
};
