import React from 'react';
import { Item } from 'semantic-ui-react';
import { YgImage } from 'components';
import { util } from 'utils/util';
import './ShopItem.css';

const ShopItem = (props) => {
  const { imgSrc, name, price, onPut } = props;
  return (
    <Item className="ShopItem" onClick={() => onPut(props)}>
      {/* <Item.Image size='tiny' src={imgSrc} /> */}
      <YgImage
        floated='right'
        size='mini'
        src={imgSrc}
      />
      <Item.Content>
        <Item.Header>{name}</Item.Header>
        <Item.Meta>
          <span className='price'>{util.numberCommas(price)}원</span>
        </Item.Meta>
      </Item.Content>
    </Item>
  );
};

export default ShopItem;