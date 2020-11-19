import React from 'react';
import {
  SuperMarketTemplate, ShopItemList, BasketItemList, TotalPrice
} from './index';

const SuperMarket = () => (
  <SuperMarketTemplate
    items={<ShopItemList />}
    basket={<BasketItemList />}
    total={<TotalPrice />}
  />
);

export default SuperMarket;