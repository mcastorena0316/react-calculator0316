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
    if (numberTwo === '0') {
      total = 'Infinity';
    } else {
      total = Big(numberOne).div(numberTwo).toString();
    }
  } else if (operation === '%') {
    if (!numberOne) {
      total = Big(numberTwo).div(100).toString();
    } else {
      total = (Big(numberTwo).times(numberOne)).div(100).toString();
    }
  }

  return total;
};

export default operate;
