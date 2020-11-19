import { observable } from 'mobx';
import _ from 'lodash';

const market = observable({
  selectedItems: [],

  put(item) {
    const fined = this.selectedItems.find(f => f.code === item.code);

    if (!fined) {
      this.selectedItems.push({...item, count: 1});
      return;
    }

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
    const fined = _.find(this.selectedItems, f => f.code === item.code);
    fined.price = 0;
    fined.count = Number(item.value);
  },

  get total() {
    return _.sumBy(this.selectedItems, 'price');
  }

});

export { market };