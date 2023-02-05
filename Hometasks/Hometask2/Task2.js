// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let array = [10, true, 'orest', 122, 30, false, 0.16, 'vyshenskyi', 1000, -333]
console.log(array);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let books = {
    title: 'Harry Poter',
    pageCount: 200,
    genre: 'drama',
}
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

books.authors = [
    {name: 'Andriy', age:52},
    {name: 'Oleg', age:40},
    {name: 'Anatoliy', age:43},
    {name: 'Roman', age:60},
    {name: 'Stepan', age:55},
]
console.log(books);

// - Створити масив з 10 об'єктами які описують сутність "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let user = [
    {name: 'Andriy', username: 'andriy', password: '0000'},
    {name: 'Oleg', username: 'oleg', password: '1111'},
    {name: 'Orest', username: 'orest', password: '2222'},
    {name: 'Liolik', username: 'liolik', password: '3333'},
    {name: 'Bolik', username: 'bolik', password: '4444'},
    {name: 'Vlad', username: 'vlad', password: '5555'},
    {name: 'Anna', username: 'anna', password: '6666'},
    {name: 'Nina', username: 'nina', password: '7777'},
    {name: 'Stepan', username: 'stepan', password: '8888'},
    {name: 'Vova', username: 'vova', password: '9999'}
]
console.log(user[0].password);
console.log(user[1].password);
console.log(user[2].password);
console.log(user[3].password);
console.log(user[4].password);
console.log(user[5].password);
console.log(user[6].password);
console.log(user[7].password);
console.log(user[8].password);
console.log(user[9].password);


// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте скрипт при a, що дорівнює 1, 0, -3
let x = 6;
// x = 1;
// x = 0;
// x = -3;

if (x !== 0){
    console.log('Вірно')
}
else {
    console.log('Невірно')
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 0;

if (time >= 0 && time <=14){
    console.log('First part')
}
else if (time > 14 && time <= 29) {
    console.log('Second part')
}
else if (time >29 && time <= 44){
    console.log('Third part')
}
else if (time >44 && time <= 59){
    console.log('Fourth part')
}
else {
    console.log('Error')
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 15;

if (day >= 1 && day <= 10){
    console.log('First part')
}
else if (day > 10 && day <= 20){
    console.log('Second part')
}
else if (day > 20 && day <= 31){
    console.log('Third part')
}
else{
    console.log('Error')
}

// - Скласти розклад на тиждень за допомоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let num_week = +prompt('Введіть порядковий номер дня тижня (від 1 до 7)!',)
switch (num_week) {
    case 1:
        console.log('Monday')
        break;
    case 2:
        console.log('Tuesday')
        break
    case 3:
        console.log('Wednesday')
        break
    case 4:
        console.log('Thursday')
        break
    case 5:
        console.log('Friday')
        break
    case 6:
        console.log('Saturday')
        break
    case 7:
        console.log('Sunday')
        break
}
//- Користувач вводить або має два числа.
//    Потрібно знайти та вивести максимальне число з тих двох.
//    Також потрібно врахувати коли введені рівні числа.

let first_num = +prompt('Write first number:',)
let second_num = +prompt('Write second number:',)

if (first_num > second_num){
    console.log(first_num)
}
else if (first_num === second_num){
    console.log('Цифри рівні')
}
else {
    console.log(second_num)
}

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і т.д. включно). Напишіть код який,
//     за допомоги оператора || буде присвоювати змінній х значення "default" якщо значення змінної х являється falsy
//     (хибно подібні, тобто приводиться до false
let x1 = null;
x1 = x1 || 'default'
console.log(x1)


// - з файлу arrays.js (лежить в папці 2023 plan) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (let item of coursesAndDurationArray){
    if (item.monthDuration > 5){
        console.log(item.title,':', 'Супер')
    }
}