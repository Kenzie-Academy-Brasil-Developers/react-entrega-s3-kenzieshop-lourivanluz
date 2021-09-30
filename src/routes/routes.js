import { Route, Switch } from "react-router-dom";
import { Cart } from "../pages/Cart";
import { Home } from "../pages/Home";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path={"/"}>
        <Home />
      </Route>
      <Route path={"/cart"}>
        <Cart />
      </Route>
    </Switch>
  );
};
