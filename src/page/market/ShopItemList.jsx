import React from 'react';
import { Item } from 'semantic-ui-react';
import { YgTab } from 'components';
import useStore from 'useStore';
import ShopItem from './ShopItem';
import foolList from 'datas/foodList';


const ShopItemList = () => {
  const { market } = useStore();

  const onPut = (item) => {
    market.put(item);
  }

  const paneItem = (key) => {
    const list = foolList(key);
    return (
      <Item.Group divided>
        {list.map((item, i) => <ShopItem key={i} {...item} onPut={onPut} />)}
      </Item.Group>
    )
  }

  const tabItems = [
    { menuItem: '스낵', pane: paneItem('snack') },
    { menuItem: '음료', pane: paneItem('drink') },
    { menuItem: '밥', pane: paneItem('rice') },
    { menuItem: '라면', pane: paneItem('noodle') }
  ];

  return (
    <YgTab
      items={tabItems}
    />
  )
}

export default ShopItemList;