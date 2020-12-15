const SNACK = [
  {
    code: 's01',
    name: '포카칩',
    price: 1500,
    imgSrc: 's01.jpeg'
  },
  {
    code: 's02',
    name: '새우깡',
    price: 1000,
    imgSrc: 's02.jpeg'
  },
  {
    code: 's03',
    name: '꼬북칩',
    price: 2500,
    imgSrc: 's03.jpeg'
  },
  {
    code: 's04',
    name: '수미칩',
    price: 2000,
    imgSrc: 's04.jpeg'
  },
  {
    code: 's05',
    name: '허니버터칩',
    price: 3000,
    imgSrc: 's05.jpeg'
  },
  {
    code: 's06',
    name: '치토스',
    price: 1000,
    imgSrc: 's06.jpeg'
  },
];

const DRINK = [
  {
    code: 'd01',
    name: '아이리스',
    price: 800,
    imgSrc: 'd01.jpeg'
  },
  {
    code: 'd02',
    name: '콜라',
    price: 1500,
    imgSrc: 'd02.jpeg'
  },
  {
    code: 'd03',
    name: '사이다',
    price: 1500,
    imgSrc: 'd03.jpeg'
  },
  {
    code: 'd04',
    name: '환타',
    price: 1500,
    imgSrc: 'd04.jpeg'
  },
  {
    code: 'd05',
    name: '아메리카노',
    price: 1500,
    imgSrc: 'd05.jpeg'
  },
  {
    code: 'd06',
    name: '카페라떼',
    price: 2500,
    imgSrc: 'd06.jpeg'
  },
  {
    code: 'd07',
    name: '포카리스웨트',
    price: 3000,
    imgSrc: 'd07.jpeg'
  },
];

const RICE = [
  {
    code: 'r01',
    name: '마라탕',
    price: 5000,
    imgSrc: 'r01.jpeg'
  },
  {
    code: 'r02',
    name: '블고기버거 셋트',
    price: 6000,
    imgSrc: 'r02.jpeg'
  },
  {
    code: 'r03',
    name: '새우버거1+1',
    price: 4000,
    imgSrc: 'r03.jpeg'
  },
  {
    code: 'r04',
    name: '김치볶음밥',
    price: 5000,
    imgSrc: 'r04.jpeg'
  },
  {
    code: 'r05',
    name: '오징어순대',
    price: 6000,
    imgSrc: 'r05.jpeg'
  },
  {
    code: 'r06',
    name: '삼겹살',
    price: 5000,
    imgSrc: 'r06.jpeg'
  },
  {
    code: 'r07',
    name: '족발셋트',
    price: 7000,
    imgSrc: 'r07.jpeg'
  },
  {
    code: 'r08',
    name: '핫도그1+1',
    price: 3000,
    imgSrc: 'r08.jpeg'
  }
];

const NOODLE = [
  {
    code: 'n01',
    name: '진라면 냄비',
    price: 2500,
    imgSrc: 'n01.jpeg'
  },
  {
    code: 'n02',
    name: '신라면 컵라면',
    price: 1000,
    imgSrc: 'n02.jpeg'
  },
  {
    code: 'n03',
    name: '우동',
    price: 2500,
    imgSrc: 'n03.jpeg'
  },
  {
    code: 'n04',
    name: '쫄면',
    price: 3000,
    imgSrc: 'n04.jpeg'
  },
  {
    code: 'n05',
    name: '물냉면',
    price: 3500,
    imgSrc: 'n05.jpeg'
  },
  {
    code: 'n06',
    name: '돈코츠라멘',
    price: 5000,
    imgSrc: 'n06.jpeg'
  },
];

const foodList = {

  getFoodList: (type) => {
    let foods = [];
    switch(type.toUpperCase()) {
    case 'SNACK':
      foods = SNACK;
      break;
    case 'DRINK':
      foods = DRINK;
      break;
    case 'RICE':
      foods = RICE;
      break;
    case 'NOODLE':
      foods = NOODLE;
      break;
    default: break;
    }
    return foods;
  }

};

export default foodList;