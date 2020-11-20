import React from 'react';
import { Card, Image, Button, Icon } from 'semantic-ui-react';
import moment from 'moment';
import { util } from 'utils/util';

const PcItem = (props) => {

  const { item } = props;

  return (
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='https://e7.pngegg.com/pngimages/825/741/png-clipart-kakaotalk-kakao-friends-sticker-iphone-iphone-electronics-smiley.png'
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
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            시작
          </Button>
          <Button basic color='red'>
            종료
          </Button>
        </div>
      </Card.Content>
    </Card>
  )
}

export default PcItem;