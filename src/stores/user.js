import { observable } from 'mobx';
import { payment } from './payment';
import _ from 'lodash';
import moment from 'moment';
import userList from 'datas/userList';

const PC_COUNT = 30; // pc 갯수
const PAY_UPDATE_TIME = 100; // 100 초마다 결제 금액 변경
const UPDATE_TIME = 10; // 10초마다 데이터 변경
const GAME_LIST = [
  '배틀그라운드', '리그오브레전드', '네이버', '블레이드앤소울', '아이온', '다음', '리니지', '천애명월도', '디아블로2',
  '디아블로3', '월드오브워크래프트', '스타크래프트', '피파온라인4', '마인크래프트', '오버워치', '스페셜포스', '서든어택'
];

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
      payment: 1000,
      time: 0,
      image: `kakao${_.sample(_.range(1, 23))}.png` // kakao1 ~ kakao22 이미지를 랜덤하게 참조
    });
  },

  pcEnd(num) {
    const fined = _.find(this.pcUserList, f => f.pc === num);
    if (fined) {
      const obj = [
        { type: 'pc', code: `${num}번`, payment: fined.payment }
      ]
      payment.addPayment(fined.payment, obj);
    }

    this.pcUserList = _.filter(this.pcUserList, item => item.pc !== num);
  },

  userDynamicData(user, count) {
    const fined = _.find(this.pcUserList, f => f.id === user.id);
    if (fined) {
      fined.time += count;
      if ((Math.floor(fined.time) % UPDATE_TIME) === 0) {
        fined.play = _.sample(GAME_LIST);
      }
      if ((Math.floor(fined.time) % PAY_UPDATE_TIME) === 0) {
        fined.payment += 100;
      }
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