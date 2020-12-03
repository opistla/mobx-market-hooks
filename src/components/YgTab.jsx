import React, { useEffect, useState } from 'react';
import { Tab } from 'semantic-ui-react';
import _ from 'lodash';

const YgTab = (props) => {

  const [panes, setPanes] = useState([]);

  const { items } = props;

  useEffect(() => {
    // pane의 키를 tab가이드에 맞게 render메소드로 변경
    const data = _.map(items, item => {
      if ( _.some(_.keys(item), s => s === 'pane') ) {
        item.render = () => item.pane;
      }
      return item;
    });

    setPanes(data);
  }, [items]);


  return (
    <Tab
      // renderActiveOnly={false}
      panes={panes}
    />
  );
};

export default YgTab;