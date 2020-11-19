import React from 'react';
import { useObserver } from 'mobx-react-lite';
import useStore from 'useStore';
import BasketItem from './BasketItem';

const BasketItemList = () => {

  const { market } = useStore();

  const onChangeCount = (obj) => {
    market.changeCount(obj);
  }

  const onTake = (code) => {
    market.take(code);
  }

  return useObserver(() => (
    <div>
      {market.selectedItems.map((item, i) => (
        <BasketItem
          key={i}
          code={item.code}
          name={item.name}
          price={item.price}
          count={item.count}
          onChangeCount={onChangeCount}
          onTake={onTake}
        />
      ))}
    </div>
  ));
};

export default BasketItemList;