import { observable } from 'mobx';
import _ from 'lodash';

const payment = observable({

  productObj: [],
  totalMoney: 0,

  addPayment(payment, list) {
    this.totalMoney += payment;

    const fined = _.filter(this.productObj, f => _.some(list, s => f.code === s.code));
    if (fined.length !== 0) {
      list = _.map(fined, item => {
        item.payment += payment;
        return item;
      });
    }

    this.productObj = _.uniqBy([...this.productObj, ...list], 'code')
  }

});

export { payment };