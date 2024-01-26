'use strict'
/*1. Дано масив з елементами різних типів. 
Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.*/
const myArray = [42, 18, 'Hello', true, 125, null, 58, 'world', undefined, 'Java Script', 8, false, 96, 378];

function averageNum(arr){
  let sum = 0;
  let counterNum = 0;

  for(let i = 0; i < arr.length; i++){
    if(typeof arr[i] === 'number'){
      sum += arr[i];
      counterNum++
    }
  }

  if(counterNum > 0){
    return (sum / counterNum).toFixed(2);
  }else{
    return (`Числових елементів немає в масиві`)
  }
}

const myArrayResult = averageNum(myArray);
console.log(`Середнє арифметичне числових елементів масиву становить: ${myArrayResult}.`);


/*2. Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. 
У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).
Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.*/
let inputZnak = prompt(`Оберіть дію, яку хочете зробити: +, -, *, /, %, ^`);
let xNum = parseFloat(prompt(`Введіть перше число:`));
let yNum = parseFloat(prompt(`Введіть друге число:`));

function doMath(x, znak, y){
  switch (znak){
    case '+':
    return x + y;

    case '-':
    return x - y;

    case '*':
    return x * y;

    case '/':
    if(y !== 0){
      return x / y;
    }else{
      return (`Ділення на 0 неможливе.`)
    }

    case '%':
    if(y !== 0){
      return x % y;
    }else{
      return (`Ділення на 0 неможливе.`)
    }

    case '^':
    if(y !== 0){
      return x ** y;
    }
    else{
      return 1;
    }

    default:
      return (`Введено некоректне значення.`)
  }
}

let calculateResult = doMath(xNum, inputZnak, yNum);
console.log(`${calculateResult}`);


/*3. Написати функцію заповнення даними користувача двомірного масиву. 
Довжину основного масиву і внутрішніх масивів задає користувач. 
Значення всіх елементів всіх масивів задає користувач.*/
function createMatrix(){
  let rows = parseInt(prompt(`Введіть бажану кількість рядків:`));
  let columns = parseInt(prompt(`Веддіть бажану кількість стовбців:`));

  let matrix = [];

  for(let i = 0; i < rows; i++){
    let innerArray = [];
    for(let j = 0; j < columns; j++){
      let userValue = prompt(`Введіть значення для елементів масиву через кому:`)
      innerArray.push(userValue)
    }

    matrix.push(innerArray)

  }
  return matrix; 

}

let userArray = createMatrix();
console.log(userArray);

/*4. Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 
'func(" hello world", ['l', 'd'])' поверне нам "heo wor". 
Вихідний рядок та символи для видалення задає користувач.*/
let userString = prompt(`Введдіть речення або слово:`);
let userRemoveLetter = prompt(`Введіть букви, які хочете видалити:`);

function removeLetters(inputStr, letterToRemove){
  for(let i = 0; i < letterToRemove.length; i++ ){
    let currentLetter = letterToRemove[i];
    inputStr = inputStr.split(currentLetter).join('');
  }
  return inputStr;
}

let result = removeLetters(userString,  userRemoveLetter);
console.log(`${result}`);