// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log
let srt1 = 'hello';
let srt2 = 'owu';
let srt3 = 'com';
let srt4 = 'ua';
let num1 = 1;
let num2 = 10;
let num3 = -999;
let num4 = 3.14;
let num5 = 2.7;
let num6 = 16;
let bool1 = true;
let bool2 = false;


console.log(srt1);
console.log(srt2);
console.log(srt3);
console.log(srt4);
console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(num5);
console.log(num6);
console.log(bool1);
console.log(bool2);


// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

let firstName = 'Orest';
let middleName = 'Vyshenskyi';
let lastName = 'Andriyovych';

console.log(`${firstName} ${middleName} ${lastName}`);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;

let a = 100;
let b = '100';
let c = true;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);


// Додаткове для тих хто цікавився prompt'om
// - За допомогою 3-х різних prompt() отримати 3 слова які являються вашими Ім'ям, По батькові та роками. та вивести в консоль

let name1 = prompt('Як вас звати?',);
let middleName1 = prompt('Як вас по батькові?',);
let age1 = prompt('Скільки вам років?', );


console.log(name1);
console.log(middleName1);
console.log(+age1);

