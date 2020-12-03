import React from 'react';
import { Input } from 'semantic-ui-react';

const YgInput = (props) => {

  const { value, onChange, type } = props;

  return (
    <Input
      {...props}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
};

YgInput.defaultProps = {
  type: 'text'
};

export default YgInput;