import React from 'react';
import { useObserver } from 'mobx-react';
import _ from 'lodash';
import useStore from 'useStore';
import { PcItemList } from 'page/pc';
import './PcTemplate.css';

const PcTemplate = () => {

  const { user } = useStore();

  const items = _.map(user.userIds, (item, i) => {
    const pcNum = i + 1;
    return {
      pc: pcNum,
      userId: item,
      header: `${pcNum}번`,
    }
  });

  return useObserver(() => (
    <>
      <p style={{ paddingLeft: '20px' }}>
        전체 PC : {user.userIds.length} 대<br />
        가동 PC : {user.userIds.length} 대<br />
        종료 PC : {0} 대
      </p>
      <div className="PcTemplate">
        <PcItemList items={items} />
      </div>
    </>
  ));
}

export default PcTemplate;