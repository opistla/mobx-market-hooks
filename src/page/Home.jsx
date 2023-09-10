import React from 'react';
// import { useHistory } from 'react-router-dom';
// import { Card, Button, Embed } from 'semantic-ui-react';
// import _ from 'lodash';
import { Embed } from 'semantic-ui-react';
import './Home.css';

const Home = () => {

  // const history = useHistory();

  // const pageList = [
  //   { name: 'PC', page: 'pc' },
  //   { name: 'Food', page: 'food' },
  //   { name: '정산', page: 'payment' },
  // ];

  // const items = _.map(pageList, (item, i) => {
  //   return {
  //     key: i,
  //     description: <Button fluid size='massive' content={item.name} onClick={() => onClick(item.page)} />
  //   }
  // });

  // const onClick = (page) => {
  //   history.push(`/${page}`);
  // }

  return (
    <>
      {/* <div className="home">
        <Card.Group itemsPerRow={3} className="card-group" items={items} />
      </div> */}
      <Embed
        id='zQqscf6AHiA'
        placeholder='/images/dron.jpg'
        source='youtube'
        aspectRatio='21:9'
      />
    </>
  );
};

export default Home;



