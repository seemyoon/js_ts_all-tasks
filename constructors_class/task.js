function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone
}

const user1 = new User(1, 'vasya', 'vaslyev', 'vasya@gmail.com', '+380680680681')
const user2 = new User(2, 'igor', 'pomidorov', 'pomidorov@gmail.com', '+380980680681')
const user3 = new User(3, 'maga', 'magazin', 'maga@gmail.com', '+380730680681')
const user4 = new User(4, 'vova', 'sozo', 'sozo@gmail.com', '+380730680681')
const user5 = new User(5, 'vanya', 'foko', 'foko@gmail.com', '+380730880681')
const user6 = new User(6, 'liza', 'ogurciva', 'ogurciva@gmail.com', '+380930680681')
const user7 = new User(7, 'lyoha', 'aliksiev', 'aliksiev@gmail.com', '+380630680681')
const user8 = new User(8, 'baki', 'bako', 'bako@gmail.com', '+380730640681')
const user9 = new User(9, 'john', 'doe', 'doe@gmail.com', '+3807306823681')
const user10 = new User(10, 'daniel', 'kim', 'maga@gmail.com', '+380730080681')

const users = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10]
const filteredUser = users.filter(user => user.id % 2 === 0)

const sortedUser = users.sort((userItem1, userItem2) => userItem1.id - userItem2.id)

function Client(id, name, surname, email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order
}

const client1 = new Client(1, 'vasya', 'vaslyev', 'vasya@gmail.com', '+380680680681', ['banana', 'strawberry', 'raspberry', 'melon'])
const client2 = new Client(2, 'igor', 'pomidorov', 'pomidorov@gmail.com', '+380980680681', ['banana', 'raspberry', 'melon'])
const client3 = new Client(3, 'maga', 'magazin', 'maga@gmail.com', '+380730680681', ['banana', 'strawberry', 'raspberry',])
const client4 = new Client(4, 'vova', 'sozo', 'sozo@gmail.com', '+380730680681', ['raspberry', 'melon'])
const client5 = new Client(1, 'vanya', 'ivanov', 'ivanov@gmail.com', '+380730680681', ['strawberry', 'melon'])
const client6 = new Client(6, 'liza', 'ogurciva', 'ogurciva@gmail.com', '+380930680681', ['grapes', 'strawberry', 'raspberry', 'melon'])
const client7 = new Client(7, 'lyoha', 'aliksiev', 'aliksiev@gmail.com', '+380630680681', ['watermelon', 'raspberry', 'melon'])
const client8 = new Client(8, 'baki', 'bako', 'bako@gmail.com', '+380730640681', ['melon'])
const client9 = new Client(9, 'john', 'doe', 'doe@gmail.com', '+3807306823681', ['peach', 'strawberry', 'raspberry', 'melon'])
const client10 = new Client(10, 'daniel', 'kim', 'maga@gmail.com', '+380730080681', ['pear', 'raspberry', 'melon'])

const clients = [
    client1,
    client2,
    client3,
    client4,
    client5,
    client6,
    client7,
    client8,
    client9,
    client10
]

const filteredClientsByOrderLength = clients.sort((client1, client2) => client1.order.length - client2.order.length)
console.log(filteredClientsByOrderLength);

function Car(model, creator, year, maxSpeed, engineCapacity) {
    this.model = model;
    this.creator = creator;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;

    this.drive = () => {
        return `їдемо зі швидкістю ${this.maxSpeed} на годину`
    }

    this.info = () => {
        return {
            model: this.model,
            creator: this.creator,
            year: this.year,
            maxSpeedEngine: this.maxSpeed,
            engineCapacity: this.engineCapacity,
        }
    }

    this.increaseMaxSpeed = (newSpeed) => {
        return this.maxSpeed + newSpeed
    }

    this.changeValue = (newValue) => {
        return this.year = newValue
    }

    this.addDriver = (driver) => {
        return this.driver = driver
    }

}

const car1 = new Car('bmw', 'germany', 2001, 300, 400)
console.log(car1.drive());
console.log(car1.info())
console.log(car1.increaseMaxSpeed(30))
car1.changeValue(2002)
console.log(car1.year)

function Driver(driverName, isLicense) {
    this.driverName = driverName;
    this.isLicense = isLicense;
}

const driver1 = new Driver('vasya', true)
const driver2 = new Driver('kuzya', true)

car1.addDriver(driver1)
car1.addDriver(driver2)
console.log(car1)

class Car2 {

    constructor(model, creator, year, maxSpeed, engineCapacity) {
        this.model = model
        this.creator = creator
        this.year = year
        this.maxSpeed = maxSpeed
        this.engineCapacity = engineCapacity
    }

    drive() {
        return `їдемо зі швидкістю ${this.maxSpeed} на годину`
    }

    info() {
        return {
            model: this.model,
            creator: this.creator,
            year: this.year,
            maxSpeed: this.maxSpeed,
            engineCapacity: this.engineCapacity,
        }
    }

    increaseMaxSpeed(newSpeed) {
        return this.maxSpeed + newSpeed
    }

    changeValue(newValue) {
        return this.year = newValue
    }

    addDriver(driver) {
        return this.driver = driver
    }
}

car2 = new Car2('mers', 'germany', 2004, 350, 700)
console.log(car2.drive())
console.log(car2.info())
console.log(car2.increaseMaxSpeed(75))
console.log(car2.changeValue(2015))

class Driver2 {
    constructor(driverName, isLicense) {
        this.driverName = driverName
        this.isLicense = isLicense
    }
}

const driver3 = new Driver('lyoha', false)

console.log(car2.addDriver(driver3))

console.log(car2)

const arr = ['qwe', 'asd', 132]


Array.prototype.customForeach = function (cb) {
    for (const elem of this) {
        cb(elem)
    }
}

arr.customForeach(i => console.log(i))


Array.prototype.customFilter = function (cb) {
    const newArr = []
    for (const elem of this) {
        if (cb(elem)) {
            newArr.push(elem)
        }
    }
    return newArr
}

console.log(arr.customFilter(i => typeof i === 'string'))

const arrr = [2, 2, 2, 0, 4]

Array.prototype.customEvery = function (cb) {
    for (let i = 0; i < this.length; i++) {
        if (!cb(this[i], i, this)) {
            return false
        }
    }
    return true

}
const customEvery = arrr.customEvery((element) => element > 10);

console.log(customEvery)