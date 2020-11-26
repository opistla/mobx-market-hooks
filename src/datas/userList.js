import _ from 'lodash';

const ID_LANGTH = 7; // 유저 아이디 길이

const NAME_FIRST = '김이박최정강조윤장임한오서신권황안송류전홍고문양손배조백허유남심노정하곽성차주우구신임나전민유진지엄채원천방공강현함변염양변여추노도소신석선설마주연방위표명기반왕모장남탁국여진구';
const NAME_LAST = '가강건경고관광구규근기길나남노누다단달담대덕도동두라래로루리마만명무문미민바박백범별병보사산상새서석선설섭성세소솔수숙순숭슬승시신아안애엄여연영예오옥완요용우원월위유윤율으은의이익인일자잔장재전정제조종주준중지진찬창채천철초춘충치탐태택판하한해혁현형혜호홍화환회효훈휘희운모배부림봉혼황량린을비솜공면탁온디항후려균묵송욱휴언들견추걸삼열웅분변양출타흥겸곤번식란더손술반빈실직악람권복심헌엽학개평늘랑향울련'


const userList = {

  // 이름3글자 생성
  getUserNameRandom: () => {
    const first = _.shuffle(NAME_FIRST)[0];
    const last = _.map(_.range(2), r => _.shuffle(NAME_LAST)[r]).join('');
    return `${first}${last}`;
  },

  // 아이디 7글자 생성
  getUserIdRandom: () => {
    return _.map(_.range(ID_LANGTH), () => (
      _.sample(toString(37).replace(/[^a-z]+/g, ''))
    )).join('')
  },

  // 유저아이디를 랜덤하게 생성 여러명
  userIdRandomSetting: (count) => {
    // 생성할 유저 갯수 count
    const ids = _.map(_.range(count), () => (
      userList.getUserIdRandom()
    ));

    return _.uniq(ids);
  },

}

export default userList;