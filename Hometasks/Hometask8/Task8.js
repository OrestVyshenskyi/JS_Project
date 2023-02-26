// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname , email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
    user0 = new User(1, 'name1', 'surname1', '111@gmail.com', '0960000000');
    user1 = new User(2, 'name2', 'surname2', '222@gmail.com', '0960000001');
    user2 = new User(3, 'name3', 'surname3', '333@gmail.com', '0960000002');
    user3 = new User(4, 'name4', 'surname4', '444@gmail.com', '0960000003');
    user4 = new User(5, 'name5', 'surname5', '555@gmail.com', '0960000004');
    user5 = new User(6, 'name6', 'surname6', '666@gmail.com', '0960000005');
    user6 = new User(7, 'name7', 'surname7', '777@gmail.com', '0960000006');
    user7 = new User(8, 'name8', 'surname8', '888@gmail.com', '0960000007');
    user8 = new User(9, 'name9', 'surname9', '999@gmail.com', '0960000008');
    user9 = new User(10, 'name10', 'surname10', '101010@gmail.com', '0960000009');

let user = [];
user.push(user0, user1, user2, user3, user4, user5, user6, user7, user8, user9);

// - Взяти масив з User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let filter = user.filter(item => {
    return item.id % 2 === 0;
});
console.log(filter)

// - Взяти масив з User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sort = user.sort((a, b) => {
    return b.id - a.id
})
console.log(sort)


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client {
    constructor(id, name, surname , email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
let client = [];
client0 = new Client(0, 'name0', 'surname0', '000@gmail.com', '0960000000', ['0']);
client1 = new Client(1, 'name1', 'surname1', '111@gmail.com', '0960000001', ['0', '1']);
client2 = new Client(2, 'name2', 'surname2', '222@gmail.com', '0960000002', ['0', '2']);
client3 = new Client(3, 'name3', 'surname3', '333@gmail.com', '0960000003', ['0', '3', '2']);
client4 = new Client(4, 'name4', 'surname4', '444@gmail.com', '0960000004', ['0', '1']);
client5 = new Client(5, 'name5', 'surname5', '555@gmail.com', '0960000005', ['0']);
client6 = new Client(6, 'name6', 'surname6', '666@gmail.com', '0960000006', ['0', '1', '2', '3']);
client7 = new Client(7, 'name7', 'surname7', '777@gmail.com', '0960000007', ['1']);
client8 = new Client(8, 'name8', 'surname8', '888@gmail.com', '0960000008', ['1', '2', '4']);
client9 = new Client(9, 'name9', 'surname9', '999@gmail.com', '0960000009', ['0', '1', '2', '3', '4']);

client.push(client0, client1, client2, client3, client4, client5, client6, client7, client8, client9);


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по-кількості товарів в полі order по зростанню. (sort)
let sort1 = client.sort((a, b) => {
   return a.order.length - b.order.length;
});
console.log(sort1)




// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car(model, producer, yearOfGraduation, maxSpeed, CapacityEngine){
    this.model = model;
    this.producer = producer;
    this.yearOfGraduation = yearOfGraduation;
    this.maxSpeed = maxSpeed;
    this.CapacityEngine = CapacityEngine;
    this.drive = function (){
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину!`)
    }
    this.info = function (){
        console.log(`Model - ${this.model}, Producer - ${this.producer}, Year of Graduation - ${this.yearOfGraduation}, Max Speed - ${this.maxSpeed}, Capacity Engine - ${this.CapacityEngine}!`)
    }
    this.increaseMaxSpeed = function (newSpeed){
        this.maxSpeed = maxSpeed + newSpeed;
    }
    this.changeYear = function (newValue) {
        this.yearOfGraduation = newValue;
    }
    this.addDriver = function (driver) {
        this.driver = driver;
    }
}
let car1 = new Car('rs6', 'audi', 2020, 300, 5.0)
car1.changeYear(2000);
car1.increaseMaxSpeed(100);
car1.addDriver('andriy')
car1.info()
console.log(car1)




// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Cars {
    constructor(model, producer, yearOfGraduation, maxSpeed, CapacityEngine) {
        this.model = model;
        this.producer = producer;
        this.yearOfGraduation = yearOfGraduation;
        this.maxSpeed = maxSpeed;
        this.CapacityEngine = CapacityEngine;
        this.drive = function (){
            console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину!`)
        }
        this.info = function (){
            console.log(`Model - ${this.model}, Producer - ${this.producer}, Year of Graduation - ${this.yearOfGraduation}, Max Speed - ${this.maxSpeed}, Capacity Engine - ${this.CapacityEngine}!`)
        }
        this.increaseMaxSpeed = function (newSpeed){
            this.maxSpeed = maxSpeed + newSpeed;
        }
        this.changeYear = function (newValue) {
            this.yearOfGraduation = newValue;
        }
        this.addDriver = function (driver) {
            this.driver = driver;
        }
    }
}
let car2 = new Cars('rs6', 'audi', 2020, 300, 5.0)
car2.changeYear(2000);
car2.increaseMaxSpeed(100);
car2.addDriver('andriy')
car2.info()
console.log(car2)



// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
class Prince {
    constructor(name, age, footSizeFind) {
        this.name = name;
        this.age = age;
        this.footSizeFind = footSizeFind;
    }

}
let cinderellas = [];
cinderellas.push(
    cinderella0 = new Cinderella('name0', 30, 32),
    cinderella1 = new Cinderella('name1', 28, 36),
    cinderella2 = new Cinderella('name2', 20, 39),
    cinderella3 = new Cinderella('name3', 35, 34),
    cinderella4 = new Cinderella('name4', 23, 30),
    cinderella5 = new Cinderella('name5', 22, 37),
    cinderella6 = new Cinderella('name6', 34, 38),
    cinderella7 = new Cinderella('name7', 26, 40),
    cinderella8 = new Cinderella('name8', 29, 33),
    cinderella9 = new Cinderella('name9', 38, 31),
);

prince = new Prince('Oleg', 31, 30);

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
function finder(arr, element){
    for (const arrElement of arr) {
        if (arrElement.footSize === element.footSizeFind){
            return (`This shoe belongs to ${arrElement.name}`)
        }
    }
}

console.log(finder(cinderellas, prince));

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
const find = cinderellas.find((element) => element.footSize === prince.footSizeFind);
console.log(find)