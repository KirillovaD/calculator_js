function count(){
  let countA = prompt('Введите первое чило', '');
  let countSign = prompt('+ , - , * , / ?', '');
  let countB = prompt('Введите второе число?', '');
  let count;
  if (countSign === '+') {
    count = +countA + +countB;
  }
  else if(countSign === '-') {
    count = +countA - +countB;
  }
  else if(countSign === '/') {
    count = +countA / +countB;
  }
  else if(countSign === '*') {
    count = +countA * +countB;
  }
  else {
    alert('Я перегрелся. Попробуйте снова')
  }
  alert(count)
}

