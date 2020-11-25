import { observable } from 'mobx';
import _ from 'lodash';
import moment from 'moment';
import userList from 'datas/userList';

const PC_COUNT = 30; // pc 갯수

const user = observable({
  pcCount: PC_COUNT,
  pcUserList: [],

  pcStart(num) {
    const userId = userList.getUserIdRandom();
    const userName = userList.getUserNameRandom();

    this.pcUserList.push({
      pc: num,
      id: userId,
      name: userName,
      state: 'start',
      startDt: moment(),
      play: '바탕화면',
      pay: 1000,
      time: 0,
      image: `kakao${_.sample(_.range(1, 23))}.png` // kakao1 ~ kakao22 이미지를 랜덤하게 참조
    });
  },

  pcEnd(num) {
    this.pcUserList = _.filter(this.pcUserList, item => item.pc !== num);
  },

  userDynamicData(user, count) {
    const fined = _.find(this.pcUserList, f => f.id === user.id);
    if (fined) {
      fined.time += count;
    }
  },

  userSetTime(user) {
    const fined = _.find(this.pcUserList, f => f.id === user.id);
    if (fined) {
      const date = moment().diff(fined.startDt);
      fined.time = date / 1000;
    }
  }

});

export { user };