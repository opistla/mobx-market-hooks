import React, { useMemo } from 'react';
import { YgImage, YgButton } from 'components';
import { Card, Icon, Segment, Label, Progress, Divider, Button } from 'semantic-ui-react';
import moment from 'moment';

import PcDynamic from './PcDynamic';

const PcItem = (props) => {

  const { item, loading, onStop, onEnd, onStart } = props;

  return useMemo(() => (
    <Card raised>
      <Segment loading={loading} raised>
        <PcState item={item} loading={loading} />
        <Divider />
        <Card.Content extra>
          <div className='ui two buttons'>
            {
              item.state ?
                <>
                  <Button animated='vertical' color='green' onClick={() => onStop(item.pc)}>
                    <Button.Content visible>{item.state === 'start' ? '일시정지' : '재시작'}</Button.Content>
                    <Button.Content hidden>
                      <Icon name={item.state === 'start' ? 'pause' : 'play'} />
                    </Button.Content>
                  </Button>
                  <Button animated='vertical' color='red' onClick={() => onEnd(item.pc)}>
                    <Button.Content visible>사용 종료</Button.Content>
                    <Button.Content hidden>
                      <Icon name='stop' />
                    </Button.Content>
                  </Button>
                </>
                :
                <Button animated='vertical' fluid color='blue' onClick={() => onStart(item.pc)}>
                  <Button.Content visible>사용 시작</Button.Content>
                  <Button.Content hidden>
                    <Icon name='power' />
                  </Button.Content>
                </Button>
            }
          </div>
        </Card.Content>
      </Segment>
    </Card>
  ), [item.time, loading, item.state]);
};

const PcState = (props) => {
  const { item, loading } = props;

  const getStatusColor = (state) => {
    if (!state) return 'grey';
    return state === 'start' ? 'green' : 'orange';
  };

  const getStatusText = (state) => {
    if (!state) return '대기중';
    return state === 'start' ? '사용중' : '일시정지';
  };

  const stopStyle = {
    background: 'repeating-linear-gradient(45deg, rgba(118, 118, 118, 0.1), rgba(118, 118, 118, 0.2) 20px)'
  };

  const getTimeProgress = () => {
    if (!item.state) return 0;
    // 임의로 시간을 10시간 기준으로 비율 계산 (실제로는 다른 로직 필요할 수 있음)
    const startTime = moment(item.startDt);
    const now = moment();
    const duration = moment.duration(now.diff(startTime));
    const hours = duration.asHours();
    return Math.min(Math.round(hours / 10 * 100), 100);
  };

  return (
    (item.state && !loading) ?
      (
        <Card.Content style={item.state === 'stop' ? stopStyle : null}>
          <Label color={getStatusColor(item.state)} ribbon>
            <Icon name={item.state === 'start' ? 'play' : 'pause'} />
            {getStatusText(item.state)}
          </Label>
          
          <Card.Header style={{marginTop: '10px'}}>
            <Icon name="desktop" color="blue" /> {item.name || `PC #${item.pc}`}
          </Card.Header>
          
          <Divider />
          
          <YgImage
            floated='right'
            size='mini'
            src={item.image}
            style={{border: '2px solid #eee', borderRadius: '5px'}}
          />
          
          <Card.Header>
            <Label color='teal' size='small'>No.{item.pc}</Label>
            {item.id && <Label color='purple' size='small'>{item.id}</Label>}
          </Card.Header>
          
          <Card.Meta style={{marginTop: '5px'}}>
            <Icon name="clock outline" /> {moment(item.startDt).format('YYYY-MM-DD HH:mm:ss')}
          </Card.Meta>
          
          <Divider hidden />
          
          <Progress 
            percent={getTimeProgress()} 
            size='small' 
            color={getStatusColor(item.state)}
            style={{marginBottom: '5px'}}
          />
          
          <PcDynamic item={item} />
        </Card.Content>
      )
      :
      (
        <Card.Content textAlign='center'>
          <Label color='grey' ribbon>대기중</Label>
          
          <Divider hidden />
          <Icon name="desktop" size="huge" color="grey" />
          
          <Divider hidden />
          <Card.Header>No.{item.pc}</Card.Header>
          
          <Divider hidden />
          <Label basic>
            <Icon name='power off' /> 사용 가능
          </Label>
        </Card.Content>
      )
  );
};

export default React.memo(PcItem);