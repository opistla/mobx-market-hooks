import React from 'react';
import { Item, Segment, Icon, Label } from 'semantic-ui-react';
import { YgTab } from 'components';
import useStore from 'useStore';
import ShopItem from './ShopItem';
import { ko, foodList } from 'datas';

const getCategoryIcon = (category) => {
  switch(category) {
  case 'snack': return 'cookie';
  case 'drink': return 'coffee';
  case 'rice': return 'food';
  case 'noodle': return 'utensils';
  default: return 'food';
  }
};

const getCategoryColor = (category) => {
  switch(category) {
  case 'snack': return 'yellow';
  case 'drink': return 'blue';
  case 'rice': return 'green';
  case 'noodle': return 'orange';
  default: return 'grey';
  }
};

const ShopItemList = () => {
  const { market } = useStore();

  const onPut = (item) => {
    market.put(item);
  };

  const paneItem = (key) => {
    const list = foodList.getFoodList(key);
    return (
      <Segment raised className={`category-${key}`}>
        <Label color={getCategoryColor(key)} ribbon>
          <Icon name={getCategoryIcon(key)} />
          {ko(key)} 메뉴
        </Label>
        <Item.Group divided className="item-list">
          {list.map((item, i) => <ShopItem key={i} category={key} {...item} onPut={onPut} />)}
        </Item.Group>
      </Segment>
    );
  };

  const tabItems = [
    { 
      menuItem: { 
        key: 'snack', 
        icon: getCategoryIcon('snack'), 
        content: ko('snack'),
        color: getCategoryColor('snack')
      }, 
      pane: paneItem('snack') 
    },
    { 
      menuItem: { 
        key: 'drink', 
        icon: getCategoryIcon('drink'), 
        content: ko('drink'),
        color: getCategoryColor('drink')
      }, 
      pane: paneItem('drink') 
    },
    { 
      menuItem: { 
        key: 'rice', 
        icon: getCategoryIcon('rice'), 
        content: ko('rice'),
        color: getCategoryColor('rice')
      }, 
      pane: paneItem('rice') 
    },
    { 
      menuItem: { 
        key: 'noodle', 
        icon: getCategoryIcon('noodle'), 
        content: ko('noodle'),
        color: getCategoryColor('noodle')
      }, 
      pane: paneItem('noodle') 
    }
  ];

  return (
    <div className="shop-item-container">
      <YgTab items={tabItems} className="food-tabs" />
    </div>
  );
};

export default ShopItemList;