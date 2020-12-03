import React from 'react';
import { useHistory } from 'react-router-dom';
import { Sidebar, Menu, Icon } from 'semantic-ui-react';
import _ from 'lodash';

const SidebarTemplate = (props) => {

  const history = useHistory();
  const { visible, setVisible } = props;

  const pageList = [
    { name: 'HOME', page: 'home', icon: 'home' },
    { name: 'PC', page: 'pc', icon: 'gamepad' },
    { name: 'Food', page: 'food', icon: 'food'  },
    { name: 'Payment', page: 'payment', icon: 'payment'  },
  ];

  return (
    <Sidebar
      as={Menu}
      animation='push'
      direction='left'
      icon='labeled'
      inverted
      vertical
      visible={visible}
      onHide={(e, data) => setVisible(data.visible)}
      width='thin'
    >
      {
        _.map(pageList, (item, i) => (
          <Menu.Item key={i} onClick={() => history.push(`/${item.page}`)}>
            <Icon name={item.icon} />
            {item.name}
          </Menu.Item>
        ))
      }
    </Sidebar>
  );
};

export default SidebarTemplate;