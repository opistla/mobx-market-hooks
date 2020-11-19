import React from 'react';
import _ from 'lodash';
import { PcItemList } from 'page/pc';
import './PcTemplate.css';

const PcTemplate = () => {

  const PC_COUNT = 30;

  const items = _.map(_.range(PC_COUNT), item => {
    const pcNum = item + 1;
    return {
      pc: pcNum,
      header: `${pcNum}번`,
    }
  });

  return (
    <>
      <p style={{ paddingLeft: '20px' }}>
        전체 PC : {PC_COUNT} 대<br />
        가동 PC : {PC_COUNT} 대<br />
        종료 PC : {0} 대
      </p>
      <div className="PcTemplate">
        <PcItemList items={items} />
      </div>
    </>
  )
}

export default PcTemplate;