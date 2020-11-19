import React from 'react';
import { useHistory } from 'react-router-dom';
import { Card, Button } from 'semantic-ui-react';
import './Home.css';

const buttonProperty = {
  size: 'massive',
  content: '입장'
};

const Home = () => {

  const history = useHistory();

  const items = [
    {
      header: 'PC',
      description: <Button {...buttonProperty} onClick={() => onClick('home')} />,
    },
    {
      header: 'Food',
      description: <Button {...buttonProperty} onClick={() => onClick('food')} />,
    },
    {
      header: '정산',
      description: <Button {...buttonProperty} onClick={() => onClick('money')} />,
    },
  ]

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



