import React from 'react';
import {
  SuperMarketTemplate, ShopItemList, BasketItemList, TotalPrice
} from './index';

const SuperMarket = (props) => (
  <SuperMarketTemplate
    items={<ShopItemList />}
    basket={<BasketItemList />}
    total={<TotalPrice modal={props.modal} />}
  />
);

export default SuperMarket;