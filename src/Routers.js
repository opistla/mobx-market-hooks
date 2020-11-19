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
import { MoneyTemplate } from 'page/money';

const Routers = () => {

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
      path: "/money",
      component: MoneyTemplate
    }
  ];

  return (
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
            <Link to="/money">정산</Link>
          </li>
        </ul>
      </div>
      <div>
        <Switch>
          <Route exact path="/" component={Home}/>
          {routes.map((route, i) => {
            return (
              <Route key={i} path={route.path} component={route.component}/>
            )
          })}
        </Switch>
      </div>
    </BrowserRouter>
    // <BrowserRouter>
    //   <div>
    //     <ul>
    //       <li>
    //         <Link to="/">Home</Link>
    //       </li>
    //       <li>
    //         <Link to="/superMarket">superMarket</Link>
    //       </li>
    //     </ul>

    //     <Switch>
    //       {routes.map((route, i) => {
    //         return (
    //           <RouteWithSubRoutes key={i} {...route} />
    //         )
    //       })}
    //     </Switch>
    //   </div>
    // </BrowserRouter>
  );
}

// const RouteWithSubRoutes = (route) => {
//   console.log('RouteWithSubRoutes', route);
//   return (
//     <Route
//       exact
//       path={route.path}
//       render={props => {
//         console.log('props', props);
//         return (
//           <route.component {...props} routes={route.routes} />
//         )
//       }}
//     />
//   );
// }

export default Routers;