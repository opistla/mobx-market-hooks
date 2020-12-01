import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from 'page/Home';
import { PcTemplate } from 'page/pc';
import { SuperMarket } from 'page/market';
import { PaymentTemplate } from 'page/payment';

const Routers = (props) => {

  const routes = [
    {
      path: "/home",
      component: Home
    },
    {
      path: "/pc",
      component: PcTemplate
    },
    {
      path: "/food",
      component: SuperMarket
    },
    {
      path: "/payment",
      component: PaymentTemplate
    }
  ];

  return (
    // <BrowserRouter>
    //   <div>
    //     <ul>
    //       <li>
    //         <Link to="/">Home</Link>
    //       </li>
    //       <li>
    //         <Link to="/pc">pc</Link>
    //       </li>
    //       <li>
    //         <Link to="/food">food</Link>
    //       </li>
    //       <li>
    //         <Link to="/payment">정산</Link>
    //       </li>
    //     </ul>
    //   </div>
    //   <div>
    //     <Switch>
    //       <Route exact path="/" component={Home} />
    //       {routes.map((route, i) => {
    //         return (
    //           <Route key={i} path={route.path} component={route.component} />
    //         )
    //       })}
    //     </Switch>
    //   </div>
    // </BrowserRouter>
    <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/pc">pc</Link>
          </li>
          <li>
            <Link to="/food">food</Link>
          </li>
          <li>
            <Link to="/payment">정산</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/" component={Home} />
          {routes.map((route, i) => {
            return (
              <RouteWithSubRoutes key={i} {...route} modal={props.modal} onLoading={props.onLoading} />
            )
          })}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

const RouteWithSubRoutes = (route) => {
  return (
    <Route
      exact
      path={route.path}
      render={props => {
        return (
          <route.component {...props} routes={route.routes} modal={route.modal} onLoading={route.onLoading} />
        )
      }}
    />
  );
}

export default Routers;