import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let total;
  if (operation === '+') {
    total = Big(numberOne).plus(numberTwo).toString();
  } else if (operation === '-') {
    total = Big(numberOne).minus(numberTwo).toString();
  } else if (operation === 'X') {
    total = Big(numberOne).times(numberTwo).toString();
  } else if (operation === '÷') {
    total = Big(numberOne).div(numberTwo).toString();
  }
  return total;
};

export default operate;
