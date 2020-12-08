import { observable } from 'mobx';
import { payment } from './payment';
import _ from 'lodash';
import moment from 'moment';
import userList from 'datas/userList';

const DEFAULT_PAYMENT = 1000; // 기본요금 1000원
const PC_COUNT = 30; // pc 갯수
const PAY_UPDATE_TIME = 100; // 100 초마다 결제 금액 변경
const UPDATE_TIME = 10; // 10초마다 데이터 변경
const GAME_LIST = [
  '배틀그라운드', '리그오브레전드', '네이버', '블레이드앤소울', '아이온', '다음', '리니지', '천애명월도', '디아블로2',
  '디아블로3', '월드오브워크래프트', '스타크래프트', '피파온라인4', '마인크래프트', '오버워치', '스페셜포스', '서든어택',
  '엘리온', 'GTA', '테라', '메이플스토리', '웜즈', '포트리스', '카오스온라인', '레드문', '테일즈위버'
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
      stopDt: null,
      play: '바탕화면',
      payment: DEFAULT_PAYMENT,
      time: 0,
      stopTime: 0,
      image: `kakao${_.sample(_.range(1, 23))}.png` // kakao1 ~ kakao22 이미지를 랜덤하게 참조
    });
  },

  pcEnd(num) {
    const fined = _.find(this.pcUserList, f => f.pc === num);
    if (fined) {
      const obj = [
        { type: 'pc', code: `${num}번`, count: 1, payment: fined.payment, defaultPrice: DEFAULT_PAYMENT }
      ];
      payment.addPayment(fined.payment, obj);
    }

    this.pcUserList = _.filter(this.pcUserList, item => item.pc !== num);
  },

  pcStop(num) {
    const fined = _.find(this.pcUserList, f => f.pc === num);
    const state = fined.state === 'start' ? 'stop' : 'start';
    if (state === 'start') {
      // 일시 정지후 재 시작할때 stop시간과 현재남은시간을 저장함
      fined.stopDt = moment();
      fined.stopTime = fined.time;
    }
    fined.state = state;
  },

  userDynamicData(user) {
    const fined = _.find(this.pcUserList, f => f.id === user.id);
    if (fined) {
      fined.time = this.getTimer(fined);
      if ((Math.floor(fined.time) % UPDATE_TIME) === 0) {
        fined.play = _.sample(GAME_LIST);
      }
      fined.payment = this.paymentTotal(fined);
    }
  },

  userSetTime(user) {
    const fined = _.find(this.pcUserList, f => f.id === user.id);
    if (fined) {
      fined.time = this.getTimer(fined);
      fined.payment = this.paymentTotal(fined);
    }
  },

  paymentTotal(item) {
    return (Math.floor(item.time / PAY_UPDATE_TIME) * PAY_UPDATE_TIME) + DEFAULT_PAYMENT;
  },

  getTimer(user) {
    let time = 0;
    let date = 0;
    if (user.stopDt) {
      // 일시정지를 1번이라도 한 피시는 이 로직을 태움
      date = moment().diff(user.stopDt);
      time = (date / 1000) + user.stopTime;
    } else {
      date = moment().diff(user.startDt);
      time = date / 1000;
    }
    return time;
  }

});

export { user };