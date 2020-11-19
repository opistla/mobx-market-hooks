const SNACK = [
  {
    code: 's01',
    name: '포카칩',
    price: 1500,
    imgSrc: 'https://image.auction.co.kr/itemimage/11/6e/08/116e08c9b6.jpg'
  },
  {
    code: 's02',
    name: '새우깡',
    price: 1000,
    imgSrc: 'https://contents.lotteon.com/itemimage/LM/88/01/04/30/36/03/0_/00/1/LM8801043036030_001_1.jpg'
  },
];

const DRINK = [
  {
    code: 'd01',
    name: '생수',
    price: 850,
    imgSrc: 'http://ojsfile.ohmynews.com/STD_IMG_FILE/2018/1115/IE002421031_STD.jpg'
  },
];

const RICE = [
  {
    code: 'r01',
    name: '마라탕',
    price: 3000,
    imgSrc: 'https://m.atemshop.com/web/product/big/201907/8a504eee7e966a863c53316af4b41c8d.jpg'
  }
];

const NOODLE = [
  {
    code: 'n01',
    name: '신라면',
    price: 900,
    imgSrc: 'https://photo3.enuri.info/data/images/service/middle/686000/686917.jpg'
  },
  {
    code: 'n02',
    name: '왕뚜껑',
    price: 1000,
    imgSrc: 'https://photo3.enuri.info/data/images/service/middle/686000/686917.jpg'
  },
];

const foodList = (type) => {
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

export default foodList;