
// 1.Создать 2 input в html для ввода цифр.
// 2. Задать переменные и присвоить им значения из input
const numA = document.querySelector("#numA")
function add() {
  let result = Number(numA.value) + Number(numB.value)
  total.textContent = `= ${result}`;
}
const numB = document.querySelector("#numB")
// 5. Задать переменную куда будем складывать результат
let total = document.querySelector("#total")

//3. Создать кнопки + - / * в html и добавить им функцию onclick
//4. Создать функцию с соовтетствующими названиями в js 
function add() {
  let result = Number(numA.value) + Number(numB.value)
  total.textContent = `= ${result}`;
}
function substract() {
  let result = Number(numA.value) - Number(numB.value)
  total.textContent = `= ${result}`;
}

function divide() {
  let result = Number(numA.value) / Number(numB.value)
  total.textContent = `= ${result}`;
}

function multiply() {
  let result = Number(numA.value) * Number(numB.value)
  total.textContent = `= ${result}`;
}
//Изменение цвета
function changeColor(){
  let square = document.querySelectorAll(".change_clr")
  square[0].style.backgroundColor = "darkmagenta";
  square[1].style.backgroundColor = "darkmagenta";
  square[2].style.backgroundColor = "darkmagenta";
  square[3].style.backgroundColor = "darkmagenta";
  };


