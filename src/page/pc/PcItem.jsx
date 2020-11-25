import React from 'react';
import useStore from 'useStore';
import { YgImage, YgButton } from 'components';
import { Card, Icon } from 'semantic-ui-react';
import moment from 'moment';

import PcDynamic from './PcDynamic';

const PcItem = (props) => {



  const { user } = useStore();
  const { item } = props;

  const onStartPc = (num) => {
    user.pcStart(num);
  }

  const onEndPc = (num) => {
    user.pcEnd(num);
  }

  return (
    <Card>
      <PcState item={item} />
      <Card.Content extra>
        <div className='ui two buttons'>
          {
            item.state ?
              <>
                <YgButton basic color='green'>
                  일시정지
                </YgButton>
                <YgButton basic color='red' onClick={() => onEndPc(item.pc)}>
                  사용 종료
                </YgButton>
              </>
            :
              <YgButton basic color='green' onClick={() => onStartPc(item.pc)}>
                사용 시작
              </YgButton>
          }
        </div>
      </Card.Content>
    </Card>
  )
}

const PcState = (props) => {

  const { item } = props;

  return (
    item.state ?
      (
        <Card.Content>
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
  )
}

export default PcItem;