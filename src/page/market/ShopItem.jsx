import React from 'react';
import { Item } from 'semantic-ui-react';
import './ShopItem.css';

const ShopItem = (props) => {
  const { imgSrc, name, price, onPut } = props;
  return (
    <Item className="ShopItem" onClick={() => onPut(props)}>
      <Item.Image size='tiny' src={imgSrc} />
      <Item.Content>
        <Item.Header>{name}</Item.Header>
        <Item.Meta>
          <span className='price'>{price}원</span>
        </Item.Meta>
      </Item.Content>
    </Item>
  );
};

export default ShopItem;