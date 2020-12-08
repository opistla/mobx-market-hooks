import React, { forwardRef, useEffect, useState, useImperativeHandle } from 'react';
import { TransitionablePortal, Segment, Header, Icon, Message } from 'semantic-ui-react';

const YgToast = forwardRef((props, ref) => {

  const [options, setOptions] = useState({});

  useImperativeHandle(ref, () => {
    return {
      show: show
    };
  });

  useEffect(() => {
    let time = null;
    if (open) {
      time = setTimeout(() => {
        setOptions({ open: false });
      }, 5000);
    }
    return () => { clearTimeout(time); };
  }, [options.open]);

  const show = (data) => {
    setOptions({
      open: true,
      ...data
    });
  };

  const animation = 'swing down';
  const duration = 500;

  const { open, header, content } = options;

  return (
    <TransitionablePortal
      ref={ref}
      open={open}
      transition={{ animation, duration }}
      onClose={() => setOptions({ open: false })}
    >
      <Segment
        inverted
        style={{
          background: '#6B66FF',
          width: '50%',
          left: '25%',
          position: 'fixed',
          top: '10%',
          zIndex: 1000,
        }}
      >
        <Header inverted color='grey' textAlign='center'><Icon name='alarm' />{header || ''}</Header>
        <Message color='grey'>{content}</Message>
      </Segment>
    </TransitionablePortal>
  );
});

YgToast.displayName = 'YgToast';

export default YgToast;