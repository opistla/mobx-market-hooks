import React from 'react';
import './PcTemplate.css';

const PcTemplate = (props) => {

  const { information, pcList } = props;

  return (
    <>
      {information}
      <div className="PcTemplate">
        {pcList}
      </div>
    </>
  );
};

export default PcTemplate;