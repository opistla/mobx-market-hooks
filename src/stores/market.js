import { observable } from 'mobx';
import _ from 'lodash';

const market = observable({

  totalMoney: 0,
  selectedItems: [],

  put(item) {
    const fined = this.selectedItems.find(f => f.code === item.code);

    if (!fined) {
      this.selectedItems.push({...item, count: 1, defaultPrice: item.price});
      return;
    }

    fined.defaultPrice = item.price;
    fined.price += item.price;
    fined.count += 1;
  },

  take(code) {
    this.selectedItems = _.filter(this.selectedItems, f => {
      if (f.code === code) {
        f.price -= f.price / f.count;
        f.count -= 1;
      }
      return f.count !== 0;
    });
  },

  changeCount(item) {
    this.selectedItems = _.filter(this.selectedItems, f => {
      if (f.code === item.code) {
        f.price = item.defaultPrice * Number(item.value);
        f.count = Number(item.value);;
      }
      return f.count !== 0;
    });
  },

  payment() {
    this.totalMoney += this.total;
    this.selectedItems = [];
  },

  get total() {
    return _.sumBy(this.selectedItems, 'price');
  }

});

export { market };