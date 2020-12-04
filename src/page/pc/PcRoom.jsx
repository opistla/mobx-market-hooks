import React from 'react';
import { PcTemplate, PcInformation, PcItemList } from 'page/pc';

const PcRoom = (props) => (
  <PcTemplate
    information={<PcInformation />}
    pcList={<PcItemList modal={props.modal} toast={props.toast} />}
  />
);

export default PcRoom;