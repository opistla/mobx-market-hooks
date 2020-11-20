import React from 'react';
import { useHistory } from 'react-router-dom';
import { Card, Button } from 'semantic-ui-react';
import _ from 'lodash';
import './Home.css';

const Home = () => {

  const history = useHistory();

  const pageList = [
    { name: 'PC', page: 'pc' },
    { name: 'Food', page: 'food' },
    { name: '정산', page: 'money' },
  ];

  const items = _.map(pageList, (item, i) => {
    return {
      key: i,
      description: <Button size='massive' content={item.name} onClick={() => onClick(item.page)} />
    }
  });

  const onClick = (page) => {
    history.push(`/${page}`);
  }

  return (
    <div className="home">
      <Card.Group itemsPerRow={3} className="card-group" items={items} />
    </div>
  )
}

export default Home;



