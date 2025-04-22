import React from 'react';
import { Container, Header, Segment, Grid, List, Image, Divider, Icon, Label } from 'semantic-ui-react';
import './Home.css';

const Home = () => {
  return (
    <Container className="home-container">
      <Segment padded="very" className="intro-segment" raised>
        <Header as="h1" textAlign="center" color="blue">PC방 관리 시스템 (2020)</Header>
        <Divider />
        
        <Grid stackable columns={2}>
          <Grid.Column>
            <Image src='/img/pc-main.jpeg' rounded width={350} height={350} centered />
          </Grid.Column>
          <Grid.Column verticalAlign='middle'>
            <Header as='h2' color="teal">
              <Icon name="computer" />
              <Header.Content>프로젝트 소개</Header.Content>
            </Header>
            <p style={{ fontSize: '1.1em', lineHeight: '1.6' }}>
              사용자 친화적인 인터페이스와 효율적인 상태 관리를 통해 PC방 운영자와 사용자 모두에게 
              <strong> 원활한 경험</strong>을 제공합니다.<br/>
              또한 결제 시스템을 통해 효율적인 시간 관리와 결제 시스템을 구현했습니다.<br /><br />
              
              <Label color="blue" size="large" pointing="right">주요 기능</Label>
              <div style={{ marginLeft: '20px', marginTop: '10px' }}>
                <strong>상단 메뉴에서 다음 기능을 이용할 수 있습니다:</strong><br/>
                <Icon name="arrow right" color="blue" /> <strong>PC 관리</strong>: 실시간으로 PC 상태를 모니터링하고 원격 제어할 수 있습니다.<br/>
                <Icon name="arrow right" color="green" /> <strong>음식 주문</strong>: 다양한 메뉴를 선택하고 PC로 직접 주문할 수 있습니다.<br/>
                <Icon name="arrow right" color="orange" /> <strong>결제 관리</strong>: 편리한 결제 시스템으로 매출 관리를 간소화합니다.
              </div>
            </p>
          </Grid.Column>
        </Grid>

        <Divider section />
        
        <Header as='h2' textAlign='center' color="blue">
          <Icon name="settings" />
          주요 기능
        </Header>
        <Grid columns={3} stackable>
          <Grid.Column>
            <Segment padded raised>
              <Label attached="top" color="blue">PC 관리</Label>
              <Header as='h3'>PC 관리 시스템</Header>
              <p>
                <Icon name="check circle" color="blue" /> 각 PC별 사용 현황 실시간 모니터링<br />
                <Icon name="check circle" color="blue" /> 원격 제어 및 문제 해결 기능<br />
                <Icon name="check circle" color="blue" /> 사용 시간 관리 및 알림 서비스
              </p>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment padded raised>
              <Label attached="top" color="green">음식 주문</Label>
              <Header as='h3'>음식 주문 시스템</Header>
              <p>
                <Icon name="check circle" color="green" /> 다양한 메뉴 카테고리 제공<br />
                <Icon name="check circle" color="green" /> 주문 현황 추적 및 알림<br />
                <Icon name="check circle" color="green" /> 인기 메뉴 추천 기능
              </p>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment padded raised>
              <Label attached="top" color="orange">결제 관리</Label>
              <Header as='h3'>통합 결제 시스템</Header>
              <p>
                <Icon name="check circle" color="orange" /> 다양한 결제 수단 지원<br />
                <Icon name="check circle" color="orange" /> 매출 통계 및 리포트 기능<br />
                <Icon name="check circle" color="orange" /> 회원 포인트 및 할인 관리
              </p>
            </Segment>
          </Grid.Column>
        </Grid>

        <Divider section />
        
        <Header as='h2' textAlign='center' color="blue">
          <Icon name="code" />
          기술 스택
        </Header>
        <Segment raised>
          <Grid columns={2} stackable>
            <Grid.Column>
              <List animated bulleted>
                <List.Item><Icon name="react" /> React 17</List.Item>
                <List.Item><Icon name="sync" /> Mobx 6</List.Item>
                <List.Item><Icon name="linkify" /> React Router 5</List.Item>
                <List.Item><Icon name="paint brush" /> Semantic UI React</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              <List animated bulleted>
                <List.Item><Icon name="js" /> JavaScript ES6+</List.Item>
                <List.Item><Icon name="html5" /> CSS3 & HTML5</List.Item>
                <List.Item><Icon name="npm" /> npm</List.Item>
                <List.Item><Icon name="webpack" /> Webpack</List.Item>
              </List>
            </Grid.Column>
          </Grid>
        </Segment>
      </Segment>
    </Container>
  );
};

export default Home;



