import React from 'react';
import { useObserver } from 'mobx-react-lite';
import useStore from 'useStore';
import BasketItem from './BasketItem';
import { Segment, Header, Icon, Divider, Message } from 'semantic-ui-react';

const BasketItemList = () => {
  const { market } = useStore();

  const onChangeCount = (obj) => {
    market.changeCount(obj);
  };

  const onTake = (code) => {
    market.take(code);
  };

  return useObserver(() => (
    <div className="basket-items-container">
      {market.selectedItems.length > 0 ? (
        <>
          <div className="basket-items-list">
            {market.selectedItems.map((item, i) => (
              <BasketItem
                key={i}
                code={item.code}
                name={item.name}
                defaultPrice={item.defaultPrice}
                price={item.price}
                count={item.count}
                onChangeCount={onChangeCount}
                onTake={onTake}
              />
            ))}
          </div>
          <Divider hidden />
          <Message positive>
            <Icon name="info circle" />
            {market.selectedItems.length}개의 상품이 장바구니에 있습니다.
          </Message>
        </>
      ) : (
        <Segment placeholder textAlign="center" className="empty-basket">
          <Header icon>
            <Icon name="shopping basket" />
            장바구니가 비어있습니다
          </Header>
          <p>메뉴 목록에서 원하는 음식을 선택해주세요</p>
        </Segment>
      )}
    </div>
  ));
};

export default BasketItemList;