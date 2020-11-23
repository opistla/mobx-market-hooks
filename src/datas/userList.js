import _ from 'lodash';

const ID_LANGTH = 7; // 유저 아이디 길이

const userList = {

  // 유저아이디를 랜덤하게 생성
  userIdRandomSetting: (count) => {
    // 생성할 유저 갯수 count
    const ids = _.map(_.range(count), () => (
      _.map(_.range(ID_LANGTH), () => (
        _.sample(toString(37).replace(/[^a-z]+/g, ''))
      )).join('')
    ));

    return _.uniq(ids);
  },

}

export default userList;