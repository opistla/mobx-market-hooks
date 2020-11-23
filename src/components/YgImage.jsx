import React from 'react';
import { Image } from 'semantic-ui-react';

const YgImage = (props) => {

  return (
    <Image
      {...props}
      src={`${process.env.PUBLIC_URL}/img/${props.src}`}
    />
  )
}

export default YgImage;