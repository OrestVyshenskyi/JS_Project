
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function square1(a, b){
    let s = a * b;
    console.log(s);
    return s;
}
square1(3, 4);



// - створити функцію яка обчислює та повертає площу кола з радіусом r
function square2(r){
    let s = (r ** 2) * 3.14;
    console.log(s);
    return s;
}
square2(2)


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function square3(h, r){
    let s = 2 * 3.14 * r * h;
    console.log(s);
    return s;
}
square3(3,2)
// - створити функцію яка приймає масив та виводить кожен його елемент
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

function mass(arr){
    for (const arrElements of arr) {
        console.log(arrElements)
    }
}
mass(users)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function paragraph(argument){
    document.write(`<div>
                         <p>${argument}</p>
                    </div>`)
}
paragraph('Hello World')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function ulList(argument){
    document.write(`<div>
                        <ul>    
                            <li>${argument}</li>
                            <li>${argument}</li>
                            <li>${argument}</li>
                        </ul>
                   </div>`)
}
ulList('Name ')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function ulListFor(argument, a){
    document.write(`<div>`);
    document.write(`<ul>`);
    for (let i = 0; i < a; i++) {
          document.write(`<li>${argument}</li>`)
    }
    document.write(`</ul>`);
    document.write(`</div>`);
}

ulListFor('Heyyyy', 2)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
array1 = [1, 2, 'oleg'];
function massive(arr){
    document.write(`<div>`);
    document.write(`<ul>`);
    for (const arrElement of arr) {
        document.write(`<li>${arrElement}</li>`)
    }
    document.write(`</ul>`);
    document.write(`</div>`);
}

massive(array1)
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
mass5 = [
    {id: 1, name: 'oleg', age: 23},
    {id: 2, name: 'nazar', age: 24},
    {id: 3, name: 'andriy', age: 25}
];
function mass1(array){
    for (const arrayElement of array) {
        document.write('<div>');
        for (const ElementObject in arrayElement) {
            document.write(`<h3>${ElementObject} - ${arrayElement[ElementObject]}</h3>`)
        }
        document.write('</div><hr>');
    }
}
mass1(mass5)

// - створити функцію яка повертає найменьше число з масиву
function mass3(){
    // let mass3 = [...arguments];
    // let result = Math.min(...arguments)
    // console.log(result)
    let mass3 = [...arguments];
    let x = mass3[0];
    for (let i = 0; i < mass3.length; i++) {
        if (mass3[i] < x){
            x = mass3[i];
        }
    }
    console.log(x)
}
mass3(2, 100, 4, 1, -10, 10, -1000)
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum(){
    let arr = [...arguments];
    let x = 0;
    for (let i = 0; i < arr.length; i++) {
        const arrElement = arr[i];
        x = x+ arrElement
    }
    console.log(x)
}
sum(1, 2, 4, 6, -10)
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
array2 = [1, 2, 3];
function swap(arr, index1, index2){
    let x = arr[index1]
    arr[index1] = arr[index2];
    arr[index2] = x
    console.log(arr)
}
swap(array2, 2, 1)


// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
function exchange(sumUAH,currencyValues,exchangeCurrency){
    for (const currencyValuesElement of currencyValues) {
        if (currencyValuesElement.currency === exchangeCurrency){
            let x = sumUAH / currencyValuesElement.value
            console.log(x);
        }
    }

}

exchange(1000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'EUR')
