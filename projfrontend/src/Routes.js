import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./core/Home";
import PaymentPage from "./payment/PaymentPage";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/pay" exact component={PaymentPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
