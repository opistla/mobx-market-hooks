import { observable } from 'mobx';
import _ from 'lodash';

const user = observable({
  userIds: [],

  userIdList(list) {
    const data = _.map(list, (item, i) => {
      const obj = {};
      obj.id = item;
      obj.num = i + 1;
      obj.state = false;
      return obj;
    });
    this.userIds = data;
  },

  pcStart(num) {
    const fined = _.find(this.userIds, f => f.num === num);
    console.log('fined', fined);
    fined.state = true;
    fined.image = `kakao${_.sample(_.range(1, 23))}.png` // kakao1 ~ kakao22 이미지를 랜덤하게 참조
  }

});

export { user };