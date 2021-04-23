import React, { useState } from 'react';
import useStore from 'useStore';
import { PcItem } from 'page/pc';

const PcItemFrame = (props) => {

  const { item } = props;
  const { user } = useStore();
  const [loading, setLoading] = useState(false);

  const modal = (message, ok) => {
    props.modal.current.show({
      content: message,
      isConfirm: true,
      onOk: ok
    });
  };

  const toast = (message) => {
    props.toast.current.show({
      content: message
    });
  };

  const onStartPc = (num) => {
    let timer = 0;
    setLoading(true);
    const interval = setInterval(() => {
      timer ++;
      if (timer > 2) {
        setLoading(false);
        clearInterval(interval);
        user.pcStart(num);
        toast(`${num}번 pc가 시작 되었습니다.`);
      }
    }, 1000);

    return () => clearInterval(interval);
  };

  const onStart = (num) => {
    modal(`${num}번 PC 사용을 시작 하시겠습니까?`, () => onStartPc(num));
  };

  const onEnd = (num) => {
    modal(`${num}번 PC 사용을 종료 하시겠습니까?`, () => {
      user.pcEnd(num);
      toast(`${num}번 pc가 종료 되었습니다.`);
    });
  };

  const onStop = (num) => {
    user.pcStop(num);
  };

  return (
    <PcItem
      item={item}
      loading={loading}
      onStart={onStart}
      onEnd={onEnd}
      onStop={onStop}
    />
  );
};

export default PcItemFrame;