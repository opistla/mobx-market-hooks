/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useObserver } from 'mobx-react';
import { Card, Icon } from 'semantic-ui-react';
import useStore from 'useStore';
import moment from 'moment';
import { util } from 'utils/util';

const CONTER = 1;

const PcDynamic = (props) => {

  const { item } = props;
  const { user } = useStore();

  useEffect(() => {
    user.userSetTime(item);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      user.userDynamicData(item, CONTER);
    }, 1000);

    return () => { clearTimeout(timeout); };
  }, [item.time]);

  return useObserver(() => (
    <>
      <Card.Meta>
        사용시간: {moment().hour(0).minute(0).second(item.time).format('HH:mm:ss')}
      </Card.Meta>
      <Card.Description>
        {item.play}
      </Card.Description>
      <Card.Description>
        <Icon className="won sign" />{util.numberCommas(item.payment)}
      </Card.Description>
    </>
  ))
}

export default PcDynamic;