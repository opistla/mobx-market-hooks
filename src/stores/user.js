import { observable } from 'mobx';

const user = observable({
  userIds: [],

  userIdList(list) {
    this.userIds = list;
  }

});

export { user };