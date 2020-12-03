
const ko = (str) => {

  let text = '';
  switch(str) {
  case 'snack': text = '스낵';
    break;
  case 'drink': text = '음료';
    break;
  case 'rice': text = '밥';
    break;
  case 'noodle': text = '라면';
    break;

  default: text = str; break;
  }

  return text;
};

export default ko;