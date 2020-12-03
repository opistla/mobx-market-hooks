import React from 'react';
import { YgInput } from 'components';
import './BasketItem.css';

const BasketItem = (props) => {
  const { code, name, price, defaultPrice, count, onTake, onChangeCount } = props;

  return (
    <div className="BasketItem">
      <div className="name">{name}</div>
      <div className="price">{price}원</div>
      <YgInput
        type="number"
        value={count}
        onChange={(e) => onChangeCount({ code, defaultPrice, value: e.target.value })}
      />
      <div className="return" onClick={() => onTake(code)}>갖다놓기</div>
    </div>
  );
};

export default BasketItem;