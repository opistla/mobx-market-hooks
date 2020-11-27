import React from 'react';
import { Item } from 'semantic-ui-react';
import { YgTab } from 'components';
import useStore from 'useStore';
import ShopItem from './ShopItem';
import { ko, foodList } from 'datas';


const ShopItemList = () => {
  const { market } = useStore();

  const onPut = (item) => {
    market.put(item);
  }

  const paneItem = (key) => {
    const list = foodList.getFoodList(key);
    return (
      <Item.Group divided>
        {list.map((item, i) => <ShopItem key={i} category={key} {...item} onPut={onPut} />)}
      </Item.Group>
    )
  }

  const tabItems = [
    { menuItem: ko('snack'), pane: paneItem('snack') },
    { menuItem: ko('drink'), pane: paneItem('drink') },
    { menuItem: ko('rice'), pane: paneItem('rice') },
    { menuItem: ko('noodle'), pane: paneItem('noodle') }
  ];

  return (
    <YgTab
      items={tabItems}
    />
  )
}

export default ShopItemList;