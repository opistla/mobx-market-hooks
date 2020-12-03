import React from 'react';
import { useObserver } from 'mobx-react';
import useStore from 'useStore';
import { Card } from 'semantic-ui-react';
import _ from 'lodash';
import { PcItem } from 'page/pc';

const PcItemList = (props) => {

  const { user } = useStore();

  return useObserver(() => {
    const items = _.map(_.range(user.pcCount), item => {
      const pc = item + 1;
      const userObj = _.find(user.pcUserList, s => s.pc === pc);
      return {
        pc,
        ...userObj
      };
    });

    return (
      <Card.Group>
        {
          _.map(items, (item, i) =>
            <PcItem {...props} key={i} item={item} />
          )
        }
      </Card.Group>
    );
  });

};

export default PcItemList;