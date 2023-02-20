// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let s1 = 'hello world';
let s2 = 'lorem ipsum';
let s3 = 'javascript is cool';
console.log(s1.length)
console.log(s2.length)
console.log(s3.length)

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log(s1.toUpperCase());
console.log(s2.toUpperCase());
console.log(s3.toUpperCase());
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
console.log(s1.toLocaleLowerCase());
console.log(s2.toLocaleLowerCase());
console.log(s3.toLocaleLowerCase());
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   '
console.log(str.replaceAll(' ', ''))
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let str1 = 'Ревуть воли як ясла повні';

function stringToarray(str) {
    let str1 = str.split(/[' ']/)
    return str1
}

console.log(stringToarray(str1))

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let str2 = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let map = str2.map(value => {
    return value.toString()
})
console.log(map)
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
let nums = [11, 21, 3];

function sortNums(arr, direction) {
    if (direction === 'ascending') {
        let num = arr.sort((a, b) => a - b)
        return num
    }
    if (direction === 'descending') {
        let num = arr.sort((a, b) => b - a)
        return num
    }

}

console.log(sortNums(nums, 'ascending')) // [3,11,21]
console.log(sortNums(nums, 'descending')) // [21,11,3]
//
// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
let sort = coursesAndDurationArray.sort((a, b) => {
    return b.monthDuration - a.monthDuration
})
console.log(sort)
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let filter = coursesAndDurationArray.filter(month => {
    return month.monthDuration > 5
});
console.log(filter)

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let map1 = coursesAndDurationArray.map((value, index) => {
    return {id: index + 1, title: value.title, monthDuration: value.monthDuration}
})
console.log(map1)
// =========================
//     описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
cards = [
    {cardSuit: 'spade', value: '6', color: 'black'},
    {cardSuit: 'spade', value: '7', color: 'black'},
    {cardSuit: 'spade', value: '8', color: 'black'},
    {cardSuit: 'spade', value: '9', color: 'black'},
    {cardSuit: 'spade', value: '10', color: 'black'},
    {cardSuit: 'spade', value: 'jack', color: 'black'},
    {cardSuit: 'spade', value: 'queen', color: 'black'},
    {cardSuit: 'spade', value: 'king', color: 'black'},
    {cardSuit: 'spade', value: 'ace', color: 'black'},

    {cardSuit: 'diamond', value: '6', color: 'red'},
    {cardSuit: 'diamond', value: '7', color: 'red'},
    {cardSuit: 'diamond', value: '8', color: 'red'},
    {cardSuit: 'diamond', value: '9', color: 'red'},
    {cardSuit: 'diamond', value: '10', color: 'red'},
    {cardSuit: 'diamond', value: 'jack', color: 'red'},
    {cardSuit: 'diamond', value: 'queen', color: 'red'},
    {cardSuit: 'diamond', value: 'king', color: 'red'},
    {cardSuit: 'diamond', value: 'ace', color: 'red'},

    {cardSuit: 'heart', value: '6', color: 'red'},
    {cardSuit: 'heart', value: '7', color: 'red'},
    {cardSuit: 'heart', value: '8', color: 'red'},
    {cardSuit: 'heart', value: '9', color: 'red'},
    {cardSuit: 'heart', value: '10', color: 'red'},
    {cardSuit: 'heart', value: 'jack', color: 'red'},
    {cardSuit: 'heart', value: 'queen', color: 'red'},
    {cardSuit: 'heart', value: 'king', color: 'red'},
    {cardSuit: 'heart', value: 'ace', color: 'red'},

    {cardSuit: 'clubs', value: '6', color: 'black'},
    {cardSuit: 'clubs', value: '7', color: 'black'},
    {cardSuit: 'clubs', value: '8', color: 'black'},
    {cardSuit: 'clubs', value: '9', color: 'black'},
    {cardSuit: 'clubs', value: '10', color: 'black'},
    {cardSuit: 'clubs', value: 'jack', color: 'black'},
    {cardSuit: 'clubs', value: 'queen', color: 'black'},
    {cardSuit: 'clubs', value: 'king', color: 'black'},
    {cardSuit: 'clubs', value: 'ace', color: 'black'},

]
// - знайти піковий туз
let filter2 = cards.filter(card => {
    return card.cardSuit === 'spade' && card.value === 'ace'
});
console.log(filter2)
// - всі шістки
let filter3 = cards.filter(card => {
    return card.value === '6'
});
console.log(filter3)
// - всі червоні карти
let filter4 = cards.filter(card => {
    return card.color === 'red'
});
console.log(filter4)
// - всі буби
let filter5 = cards.filter(card => {
    return card.cardSuit === 'diamond'
});
console.log(filter5)
// - всі трефи від 9 та більше
let filter6 = cards.filter(card => {
    return card.cardSuit === 'spade' && card.value !== '6' && card.value !== '7' && card.value !== '8'
});
console.log(filter6)


// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[], diamonds:[], hearts:[], clubs:[]
// }
let reduce = cards.reduce((accumulator, card) => {
    if (card.cardSuit === 'spade'){
        accumulator.spades.push(card);
    }
    if (card.cardSuit === 'diamond'){
        accumulator.diamonds.push(card);
    }
    if (card.cardSuit === 'heart'){
        accumulator.hearts.push(card);
    }
    if (card.cardSuit === 'clubs'){
        accumulator.clubs.push(card);
    }
    return accumulator;
}, {spades: [], diamonds: [], hearts: [], clubs: []})

console.log(reduce)
// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];


// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker
let sass = (arr, element) =>{
    for (const item of arr){
        for (const x of item.modules) {
            if (x === element){
                console.log(item)
            }
        }
    }
};

sass(coursesArray, 'docker')
