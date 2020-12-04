import { observable } from 'mobx';
import _ from 'lodash';
import { market } from './';

const counter = observable({
  number: 0,

  increase() {
    this.itemPutTake('put', market.selectedItem);
  },

  decrease() {
    this.itemPutTake('take', market.selectedItem.name);
  },

  itemPutTake(fn, item) {
    if (_.keys(market.selectedItem).length !== 0) {
      market[fn](item);
    }
  },

  countNum(num) {
    this.number = num;
  }

});

export { counter };