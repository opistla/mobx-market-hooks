import React, { useMemo } from 'react';
import { YgImage, YgButton } from 'components';
import { Card, Icon, Segment } from 'semantic-ui-react';
import moment from 'moment';

import PcDynamic from './PcDynamic';

const PcItem = (props) => {

  const { item, loading, onStop, onEnd, onStart } = props;

  return useMemo(() => (
    <Card>
      <Segment loading={loading}>
        <PcState item={item} loading={loading} />
        <Card.Content extra>
          <div className='ui two buttons'>
            {
              item.state ?
                <>
                  <YgButton basic color='green' onClick={() => onStop(item.pc)}>
                    {item.state === 'start' ? '일시정지' : '재시작'}
                  </YgButton>
                  <YgButton basic color='red' onClick={() => onEnd(item.pc)}>
                    사용 종료
                  </YgButton>
                </>
                :
                <YgButton basic color='green' onClick={() => onStart(item.pc)}>
                  사용 시작
                </YgButton>
            }
          </div>
        </Card.Content>
      </Segment>
    </Card>
  ), [item.time, loading, item.state]);
};

const PcState = (props) => {
  const { item, loading } = props;

  const stopStyle = {
    background: 'repeating-linear-gradient(45deg, #767676, transparent 20px)'
  };

  return (
    (item.state && !loading) ?
      (
        <Card.Content style={item.state === 'stop' ? stopStyle : null}>
          <Card.Header><Icon className="desktop" />{item.name}</Card.Header>
          <hr />
          <YgImage
            floated='right'
            size='mini'
            src={item.image}
          />
          <Card.Header>
            No.{item.pc} ({item.id})
          </Card.Header>
          <Card.Meta>
            시작시간: {moment(item.startDt).format('YYYY-MM-DD hh:mm:ss')}
          </Card.Meta>
          <PcDynamic item={item} />
        </Card.Content>
      )
      :
      (
        <Card.Content>
          <Card.Header><Icon className="desktop" /></Card.Header>
          <hr />
          <Card.Header>No.{item.pc}</Card.Header>
          <Card.Description>
            대기중
          </Card.Description>
        </Card.Content>
      )
  );
};

export default React.memo(PcItem);