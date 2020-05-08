const calculate = (calculator, buttonName) => {
  let { total, next, operation } = calculator;

  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const operators = ['+', '-', 'X', '÷', '%'];

  if (numbers.includes(buttonName) || buttonName === 'AC ') {
    if (total) {
      total += buttonName;
    } else {
      total = buttonName;
    }
  } else if (buttonName === '.') {
    total += '.';
  }

  return { total, next, operation };
};

export default calculate;
