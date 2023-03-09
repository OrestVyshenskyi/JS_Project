// Сто врити форму з трьома полями для name, surname, age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповнити форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

// let form = document.querySelector('.f1')
// form.onsubmit = function(e) {
//     e.preventDefault();
//
//     let div = document.createElement('div');
//     let name = document.createElement('div');
//     let surname = document.createElement('div');
//     let age = document.createElement('div');
//
//     name.innerText = `Name: ${this.name.value}`
//     surname.innerText = `Surname: ${this.surname.value}`
//     age.innerText = `Age: ${this.age.value}`
//     div.classList.add('font');
//     div.append(name, surname, age);
//     document.body.appendChild(div);
//
// }
//

// ==========================
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
// const div = document.createElement('div');
// div.classList.add('numDiv');
// let count = localStorage.getItem('count');
// count++;
// div.innerText = count
// localStorage.setItem('count', count);
// document.body.appendChild(div);

// ==========================
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію


// let date = new Date();
// let jsonSession = localStorage.getItem('session');
// let session = JSON.parse(jsonSession);
// if (session === null) {
//     session = [];
//     session.push(date);}
// else {
//     session.push(date);
// }
// localStorage.setItem('session', JSON.stringify(session))

// =========================
//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
let names = ["John", "Alice", "Bob", "Jane", "Michael", "David", "Sarah", "Emily"];
let mass100 = [];
for (let i = 0; i < 100; i++) {
    const randomName = names[Math.floor(Math.random() * names.length)];
    mass100.push(randomName);
}

let prev = document.createElement('button')
let next = document.createElement('button')
prev.innerText = 'PREV';
next.innerText = 'NEXT';
let num = 0;

prev.onclick = () => func (num -= 1, 10);
next.onclick = () => func (num += 1, 10);

function func(num, lastIndex) {
    let div = document.createElement('div');
    div.classList.add('name', 'mass');
    let firstIndex = (num - 1) * lastIndex;
    let secondIndex = num * lastIndex;

    for (let i = firstIndex; i < secondIndex; i++) {
        const mass1 = mass100[i];
        let mass = document.createElement('div')
        mass.innerText = mass1;
        div.append(mass);

    }
    document.body.appendChild(div)
}

document.body.append(prev, next);





// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)