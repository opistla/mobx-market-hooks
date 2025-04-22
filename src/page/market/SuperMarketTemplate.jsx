import React from 'react';
import { Container, Segment, Header, Icon, Divider, Grid } from 'semantic-ui-react';
import './SuperMarketTemplate.css';

const SuperMarketTemplate = (props) => {
  const { items, basket, total } = props;
  
  return (
    <Container fluid className="supermarket-container">
      <Segment basic>
        <Header as="h1" textAlign="center" color="green">
          <Icon name="food" />
          <Header.Content>음식 주문 시스템</Header.Content>
          <Header.Subheader>다양한 메뉴를 주문하고 관리할 수 있습니다</Header.Subheader>
        </Header>
        <Divider />
      </Segment>
      
      <Grid stackable columns={2} className="supermarket-content">
        <Grid.Column className="items-section">
          <Segment raised color="green" padded>
            <Header as="h2" color="green">
              <Icon name="list" />
              <Header.Content>메뉴 목록</Header.Content>
            </Header>
            <Divider />
            {items}
          </Segment>
        </Grid.Column>
        
        <Grid.Column className="basket-section">
          <Segment raised color="orange" padded>
            <Header as="h2" color="orange">
              <Icon name="shopping basket" />
              <Header.Content>장바구니</Header.Content>
            </Header>
            <Divider />
            {basket}
            
            <Segment raised color="red" padded="very" textAlign="center" className="total-section">
              {total}
            </Segment>
          </Segment>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default SuperMarketTemplate;