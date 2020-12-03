import React from 'react';
import { useObserver } from 'mobx-react';
import useStore from 'useStore';
import _ from 'lodash';

const PcInformation = () => {

  const { user } = useStore();

  return useObserver(() => {
    const startPc = _.filter(user.pcUserList, f => f.state).length;
    return (
      <p style={{ paddingLeft: '20px' }}>
        전체 PC : {user.pcCount} 대<br />
        가동 PC : {startPc} 대<br />
        종료 PC : {user.pcCount - startPc} 대
      </p>
    );
  });
};

export default PcInformation;