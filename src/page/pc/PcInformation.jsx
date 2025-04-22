import React from 'react';
import { useObserver } from 'mobx-react';
import useStore from 'useStore';
import _ from 'lodash';
import { Segment, Statistic, Icon, Grid, Header, Divider } from 'semantic-ui-react';

const PcInformation = () => {

  const { user } = useStore();

  return useObserver(() => {
    const startPc = _.filter(user.pcUserList, f => f.state).length;
    const stopPc = user.pcCount - startPc;
    
    return (
      <Segment raised padded="very" color="blue">
        <Header as="h2" textAlign="center" color="blue">
          <Icon name="server" />
          <Header.Content>PC방 현황 대시보드</Header.Content>
        </Header>
        <Divider />
        
        <Grid columns={3} stackable textAlign="center">
          <Grid.Column>
            <Segment raised circular inverted color="blue" style={{ width: 130, height: 130, margin: 'auto' }}>
              <Statistic inverted>
                <Statistic.Value>{user.pcCount}</Statistic.Value>
                <Statistic.Label>전체 PC</Statistic.Label>
              </Statistic>
            </Segment>
          </Grid.Column>
          
          <Grid.Column>
            <Segment raised circular inverted color="green" style={{ width: 130, height: 130, margin: 'auto' }}>
              <Statistic inverted>
                <Statistic.Value>{startPc}</Statistic.Value>
                <Statistic.Label>가동 PC</Statistic.Label>
              </Statistic>
            </Segment>
          </Grid.Column>
          
          <Grid.Column>
            <Segment raised circular inverted color="red" style={{ width: 130, height: 130, margin: 'auto' }}>
              <Statistic inverted>
                <Statistic.Value>{stopPc}</Statistic.Value>
                <Statistic.Label>종료 PC</Statistic.Label>
              </Statistic>
            </Segment>
          </Grid.Column>
        </Grid>
        
        <Divider hidden />
        <Segment secondary raised>
          <Grid columns={2} doubling stackable>
            <Grid.Column>
              <Statistic size="small">
                <Statistic.Value>
                  <Icon name="laptop" color="green" /> {Math.round((startPc / user.pcCount) * 100)}%
                </Statistic.Value>
                <Statistic.Label>PC 가동률</Statistic.Label>
              </Statistic>
            </Grid.Column>
            <Grid.Column>
              <Statistic size="small">
                <Statistic.Value>
                  <Icon name="clock" color="teal" /> {new Date().toLocaleTimeString()}
                </Statistic.Value>
                <Statistic.Label>현재 시간</Statistic.Label>
              </Statistic>
            </Grid.Column>
          </Grid>
        </Segment>
      </Segment>
    );
  });
};

export default PcInformation;