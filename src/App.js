import React, { useEffect } from 'react';
import Router from './Routers';
import useStore from 'useStore';
import userList from 'datas/userList';

const App = () => {

  const USER_COUNT = 30; // 생성할 유저 갯수

  const { user } = useStore();

  useEffect(() => {
    const list = userList.userIdRandomSetting(USER_COUNT);
    user.userIdList(list);
  });

  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
