import React from 'react';
import { Container, Header, Icon, Divider, Segment } from 'semantic-ui-react';
import './PcTemplate.css';

const PcTemplate = (props) => {

  const { information, pcList } = props;

  return (
    <Container fluid className="pc-template-container">
      <Segment basic>
        <Header as="h1" textAlign="center" color="blue">
          <Icon name="computer" />
          <Header.Content>PC 관리 시스템</Header.Content>
          <Header.Subheader>각 PC의 상태를 모니터링하고 제어할 수 있습니다</Header.Subheader>
        </Header>
        <Divider />
      </Segment>
      
      {information}
      
      <Segment basic>
        <Header as="h2" color="teal">
          <Icon name="desktop" />
          <Header.Content>PC 현황</Header.Content>
        </Header>
        <Divider />
        <div className="PcTemplate">
          {pcList}
        </div>
      </Segment>
    </Container>
  );
};

export default PcTemplate;