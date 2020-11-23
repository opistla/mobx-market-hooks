import React from 'react';
// import { useObserver } from 'mobx-react-lite';
import useStore from 'useStore';
import { YgImage, YgButton } from 'components';
import { Card, Icon } from 'semantic-ui-react';
import moment from 'moment';
import { util } from 'utils/util';

const PcItem = (props) => {

  const { user } = useStore();
  const { item } = props;

  const onStartPc = (num) => {
    user.pcStart(num);
  }

  return (
    <Card>
      <PcState item={item} />
      <Card.Content extra>
        <div className='ui two buttons'>
          <YgButton basic color='green' onClick={() => onStartPc(item.pc)}>
            시작
          </YgButton>
          <YgButton basic color='red'>
            종료
          </YgButton>
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
          <YgImage
            floated='right'
            size='mini'
            src={item.image}
          />
          <Card.Header><Icon className="desktop" />{item.header} ({item.userId})</Card.Header>
          <Card.Meta>{moment().format('YYYY-MM-DD hh:mm:ss')}</Card.Meta>
          <Card.Description>
            배틀그라운드
          </Card.Description>
          <Card.Description>
            <Icon className="won sign" />{util.numberCommas(1000)}
          </Card.Description>
        </Card.Content>
      )
    :
      (
        <Card.Content>
          <Card.Header><Icon className="desktop" />{item.header}</Card.Header>
          <Card.Description>
            대기중
          </Card.Description>
        </Card.Content>
      )
  )
}

export default PcItem;