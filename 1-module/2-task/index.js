function print(text) {
  console.log(text);
}

function isValid(userName) {
  if (userName != null || userName != undefined ) {
      if (userName.length >= 4) {
               for (let char of userName) {
                     if (char == " "){
                     return false;
                     } 
                } return true;
      } return false; 
   } return false; 
}

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}

sayHello();