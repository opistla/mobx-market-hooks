import React from 'react';
// import { useObserver } from 'mobx-react-lite';
import { Card } from 'semantic-ui-react';
import _ from 'lodash';
import { PcItem } from 'page/pc';

const PcItemList = (props) => {

  const { items } = props;

  console.log('너>?');

  return (
    <Card.Group
      className="card-group"
    >
      {
        _.map(items, (item, i) => <PcItem key={i} item={item} />)
      }
    </Card.Group>
  );
}

export default PcItemList;