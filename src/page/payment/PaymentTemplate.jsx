import React, { useState } from 'react';
import useStore from 'useStore';
import { util } from 'utils/util';
import { Button, Container, Segment, Header, Icon, Divider, Statistic, Menu, Grid } from 'semantic-ui-react';
import { PaymentTable, PaymentChart } from '.';

const PaymentTemplate = () => {
  const { payment } = useStore();
  const [page, setPage] = useState(true);

  const generateComponent = () => {
    const ComponentName = page ? PaymentTable : PaymentChart;
    return <ComponentName data={payment.productObj} />;
  };

  return (
    <Container fluid style={{ padding: '20px', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <Segment basic>
        <Header as="h1" textAlign="center" color="blue">
          <Icon name="payment" />
          <Header.Content>결제 관리 시스템</Header.Content>
          <Header.Subheader>매출 현황을 분석하고 관리할 수 있습니다</Header.Subheader>
        </Header>
        <Divider />
      </Segment>

      <Segment raised padded="very" color="orange">
        <Grid columns={2} stackable>
          <Grid.Column>
            <Header as="h2" color="orange">
              <Icon name="chart bar" />
              <Header.Content>매출 현황</Header.Content>
            </Header>
          </Grid.Column>
          <Grid.Column textAlign="right">
            <Menu compact>
              <Menu.Item active={page} onClick={() => setPage(true)}>
                <Icon name="table" />
                테이블 보기
              </Menu.Item>
              <Menu.Item active={!page} onClick={() => setPage(false)}>
                <Icon name="bar chart" />
                그래프 보기
              </Menu.Item>
            </Menu>
          </Grid.Column>
        </Grid>
        <Divider />

        {payment.productObj.length !== 0 ? (
          generateComponent()
        ) : (
          <Segment placeholder textAlign="center">
            <Header icon>
              <Icon name="search" />
              표시할 데이터가 없습니다.
            </Header>
          </Segment>
        )}
      </Segment>

      <Segment raised padded textAlign="center" color="green">
        <Header as="h3" color="green">
          <Icon name="money bill alternate" />
          <Header.Content>총 매출 금액</Header.Content>
        </Header>
        <Statistic size="huge" color="green">
          <Statistic.Value>
            {util.numberCommas(payment.totalMoney)} 원
          </Statistic.Value>
          <Statistic.Label>Total Revenue</Statistic.Label>
        </Statistic>
      </Segment>
    </Container>
  );
};

export default PaymentTemplate;