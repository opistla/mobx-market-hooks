import React, { useEffect } from 'react';
import { Card, Icon, Statistic, Label, Divider, Grid } from 'semantic-ui-react';
import useStore from 'useStore';
import moment from 'moment';
import { util } from 'utils/util';

const PcDynamic = (props) => {

  const { item } = props;
  const { user } = useStore();

  useEffect(() => {
    if (item.state === 'start') {
      user.userSetTime(item);
    }
  }, []);

  useEffect(() => {
    let timeout = null;
    if (item.state === 'start') {
      timeout = setTimeout(() => {
        user.userDynamicData(item);
      }, 1000);
    }
    return () => { clearTimeout(timeout); };
  }, [item.time, item.state]);

  const getTimeColor = () => {
    // 임의로 1시간(3600초) 기준으로 색상 변경
    if (item.time < 1800) return 'green';
    if (item.time < 3600) return 'yellow';
    return 'orange';
  };

  const formattedTime = moment().hour(0).minute(0).second(item.time).format('HH:mm:ss');

  return (
    <>
      <Divider />
      <Grid columns={2} stackable>
        <Grid.Column>
          <Statistic size='tiny' color={getTimeColor()}>
            <Statistic.Value>
              <Icon name='clock outline' /> {formattedTime}
            </Statistic.Value>
            <Statistic.Label>사용 시간</Statistic.Label>
          </Statistic>
        </Grid.Column>
        
        <Grid.Column>
          <Statistic size='tiny' color='blue'>
            <Statistic.Value>
              <Icon name='won sign' /> {util.numberCommas(item.payment)}
            </Statistic.Value>
            <Statistic.Label>금액</Statistic.Label>
          </Statistic>
        </Grid.Column>
      </Grid>
      
      {item.play && (
        <>
          <Divider />
          <Label color='teal' basic fluid>
            <Icon name='gamepad' /> {item.play}
          </Label>
        </>
      )}
    </>
  );
};

export default PcDynamic;