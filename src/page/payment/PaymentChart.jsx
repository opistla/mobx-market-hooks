import React, { useState, useEffect, useRef } from 'react';
import { YgChart } from 'components';
import { Header, Segment, Icon, Label, Divider, Grid, Button } from 'semantic-ui-react';
import _ from 'lodash';
import { util } from 'utils/util';

const PaymentChart = (props) => {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState('pc');
  const isChange = useRef(false);

  useEffect(() => {
    setData(getData(category));
    const interval = setInterval(() => {
      isChange.current = !isChange.current;
      const newCategory = isChange.current ? 'pc' : 'food';
      setCategory(newCategory);
      setData(getData(newCategory));
    }, 5000);
    return () => { clearInterval(interval); };
  }, []);

  const getData = (type) => {
    const getList = _.filter(props.data, item => item.type === type);
    return _.map(getList, item => {
      const x = item.code.length > 3 ? `${item.code.substring(0, 3)}...` : item.code;
      return { x, y: item.payment, label: `${util.numberCommas(item.payment)}` };
    });
  };

  const handleCategoryChange = (type) => {
    setCategory(type);
    setData(getData(type));
  };

  const chart = {
    domainPadding: { x: 50 },
    animate: { duration: 500, onLoad: { duration: 500 } },
    width: 1500,
    style: {
      parent: {
        border: "1px solid #eee",
        borderRadius: "8px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
      },
      background: {
        fill: "#f9f9f9"
      }
    }
  };

  const bar = {
    data: data,
    style: {
      data: { 
        fill: category === 'pc' ? "#2185d0" : "#21ba45", 
        width: 20,
        borderRadius: 4
      },
      labels: {
        fontSize: 12,
        fontWeight: "bold"
      }
    },
    animate: {
      onExit: {
        duration: 500,
        before: () => ({
          _y: 0,
          fill: "orange",
          label: "BYE"
        })
      }
    }
  };

  return (
    <Segment>
      <Grid columns={2} stackable verticalAlign="middle">
        <Grid.Column>
          <Header as="h3">
            <Icon 
              name={category === 'pc' ? 'computer' : 'food'} 
              color={category === 'pc' ? 'blue' : 'green'} 
            />
            <Header.Content>
              {category === 'pc' ? 'PC 매출 현황' : '음식 매출 현황'}
            </Header.Content>
          </Header>
        </Grid.Column>
        <Grid.Column textAlign="right">
          <Button.Group size="small">
            <Button 
              color={category === 'pc' ? 'blue' : undefined}
              active={category === 'pc'} 
              onClick={() => handleCategoryChange('pc')}
            >
              <Icon name="computer" /> PC
            </Button>
            <Button 
              color={category === 'food' ? 'green' : undefined}
              active={category === 'food'} 
              onClick={() => handleCategoryChange('food')}
            >
              <Icon name="food" /> 음식
            </Button>
          </Button.Group>
        </Grid.Column>
      </Grid>
      
      <Divider />
      
      {data.length > 0 ? (
        <YgChart chart={chart} bar={bar} />
      ) : (
        <Segment placeholder textAlign="center" style={{ marginTop: '20px' }}>
          <Header icon>
            <Icon name="bar chart" />
            차트 데이터가 없습니다
          </Header>
        </Segment>
      )}
      
      <Divider />
      
      <Label attached="bottom right" color={category === 'pc' ? 'blue' : 'green'}>
        <Icon name="sync" /> 5초마다 자동 업데이트
      </Label>
    </Segment>
  );
};

export default PaymentChart;