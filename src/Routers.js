import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import Home from 'page/Home';
import { PcRoom } from 'page/pc';
import { SuperMarket } from 'page/market';
import { PaymentTemplate } from 'page/payment';
import SidebarTemplate from 'page/SidebarTemplate';
import { Segment, Sidebar, Button, Icon } from 'semantic-ui-react';

const Routers = (props) => {

  const routes = [
    {
      path: "/home",
      component: Home
    },
    {
      path: "/pc",
      component: PcRoom
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

  const [visible, setVisible] = React.useState(false);

  const onClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setVisible(true);
  };

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
        <Sidebar.Pushable as={Segment}>
          <SidebarTemplate visible={visible} setVisible={(e) => setVisible(e)} />
          <Sidebar.Pusher dimmed={visible}>
            <Segment basic>
              <Segment>
                <Button fluid color='green' onClick={onClick}>
                  <Icon name="list alternate" />
                  Menu
                </Button>
              </Segment>
              <Switch>
                <Route exact path="/" component={Home} />
                {routes.map((route, i) => {
                  return (
                    <RouteWithSubRoutes
                      {...route}
                      key={i}
                      modal={props.modal}
                      toast={props.toast}
                      onLoading={props.onLoading}
                    />
                  );
                })}
              </Switch>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    </BrowserRouter>
  );
};

const RouteWithSubRoutes = (route) => {
  return (
    <Route
      exact
      path={route.path}
      render={props => {
        return (
          <route.component
            {...props}
            routes={route.routes}
            modal={route.modal}
            toast={route.toast}
            onLoading={route.onLoading}
          />
        );
      }}
    />
  );
};

export default Routers;