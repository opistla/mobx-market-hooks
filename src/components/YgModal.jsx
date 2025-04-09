import React, { forwardRef, useState, useImperativeHandle } from 'react';
import { Modal } from 'semantic-ui-react';

const YgModal = forwardRef((props, ref) => {

  const [options, setOptions] = useState({});

  useImperativeHandle(ref, () => {
    return {
      show: show
    };
  });

  const show = (data) => {
    setOptions({
      ...data,
      open: true
    });
  };

  const onConfirm = () => {
    const { onOk } = options;
    if (typeof onOk === 'function') {
      onOk();
    }
    onClose();
  };

  const onClose = () => {
    setOptions({ open: false });
  };

  const footButtons = (isConfirm) => {
    let btns = [{ key: 'cancel', content: '확인', positive: true, onClick: onClose }];
    if (isConfirm) {
      btns = [
        { key: 'cancel', content: '취소', onClick: onClose },
        { key: 'confirm', content: '확인', positive: true, onClick: onConfirm }
      ];
    }
    return btns;
  };

  const { size, open, header, content, isConfirm } = options;

  return (
    <Modal
      ref={ref}
      size={size || 'tiny'} // mini tiny small large fullscreen
      open={open}
      header={header || ' 알림'}
      content={content}
      actions={footButtons(isConfirm)}
    />
  );
});

YgModal.displayName = 'YgModal';

export default YgModal;