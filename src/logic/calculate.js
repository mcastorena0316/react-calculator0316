import operate from './operate';

const calculate = (calculator, buttonName) => {
  let { total, next, operation } = calculator;

  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
  const operators = ['+', '-', 'X', '÷', '%'];

  if (numbers.includes(buttonName)) {
    if (total) {
      total += buttonName;
    } else {
      total = buttonName;
    }
  } else if (buttonName === 'AC') {
    total = null;
    next = null;
    operation = null;
  } else if (buttonName === '+/-') {
    total = (parseFloat(total) * -1).toString();
    if (next) {
      next = (parseFloat(next) * -1).toString();
    }
  } else if (operators.includes(buttonName)) {
    if (!next && !total) {
      total = null;
      next = '0';
      operation = buttonName;
    } else if (next && operation && total) {
      next = operate(parseFloat(next), parseFloat(total), operation);
      total = null;
      operation = buttonName;
    } else {
      next = total;
      total = null;
      operation = buttonName;
    }
  } else if (buttonName === '=') {
    if (!next) {
      next = null;
      operation = buttonName;
    } else if (!total) {
      total = next;
      next = null;
      operation = buttonName;
    } else {
      total = operate(parseFloat(next), total, operation);
      next = null;
      operation = null;
    }
  }

  return { total, next, operation };
};

export default calculate;
