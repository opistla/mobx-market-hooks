export const util = {

  // 3자리 콤마
  numberCommas(num) {
    return typeof num === 'number' ?num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : num;
  }
}