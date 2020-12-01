import React from 'react';
import { Card } from 'semantic-ui-react';
import _ from 'lodash';
import { PcItem } from 'page/pc';

const PcItemList = (props) => {

  const { items, onStartPc, onEndPc } = props;

  return (
    <Card.Group
      className="card-group"
    >
      {
        _.map(items, (item, i) => <PcItem key={i} item={item} onStartPc={onStartPc} onEndPc={onEndPc} />)
      }
    </Card.Group>
  );
}

export default PcItemList;