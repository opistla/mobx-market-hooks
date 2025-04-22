import React from 'react';
import { Item, Label, Icon, Button } from 'semantic-ui-react';
import { YgImage } from 'components';
import { util } from 'utils/util';
import './ShopItem.css';

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

const ShopItem = (props) => {
  const { imgSrc, name, price, onPut, category } = props;
  
  return (
    <Item className="ShopItem">
      <YgImage
        floated='right'
        size='tiny'
        src={imgSrc}
        circular
        bordered
        style={{ border: `2px solid ${getCategoryColor(category)}` }}
      />
      <Item.Content>
        <Item.Header>{name}</Item.Header>
        <Item.Meta>
          <Label color={getCategoryColor(category)} size="tiny">
            <Icon name={getCategoryIcon(category)} />
            {category}
          </Label>
        </Item.Meta>
        <Item.Description>
          <Label tag size="large" color="red">
            {util.numberCommas(price)}원
          </Label>
        </Item.Description>
        <Item.Extra>
          <Button 
            floated="right" 
            color="green" 
            size="small" 
            icon 
            labelPosition="left"
            onClick={() => onPut(props)}
          >
            <Icon name="add to cart" />
            담기
          </Button>
        </Item.Extra>
      </Item.Content>
    </Item>
  );
};

export default ShopItem;