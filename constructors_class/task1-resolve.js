class Employee {
    _name;
    _age;
    _salary

    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary
    }

    get name() {
        return this._name
    }

    get age() {
        return this._age
    }

    get salary() {
        return this._salary
    }

    set name(value) {
        this._name = value
    }

    set age(value) {
        this._age = value
    }

    set salary(value) {
        this._salary = value
    }
}

class Programmer extends Employee {
    _lang

    constructor(name, age, salary, lang) {
        super(name, age, salary);
        this.lang = lang
    }


    get name() {
        return this._name;
    }

    get age() {
        return this._age;
    }

    get salary() {
        return this._salary * 3
    }

    get lang() {
        return this._lang
    }

    set lang(values) {
        this._lang = values
    }

    set name(value) {
        this._name = value;
    }

    set age(value) {
        this._age = value;
    }

    set salary(value) {
        this._salary = value;
    }
}

programmer1 = new Programmer('antonio', 30, 30000, ['eng', 'ua'])
programmer2 = new Programmer('pedro', 36, 35000, ['ger', 'ua'])
programmer3 = new Programmer('emmanuel', 45, 40000, ['ger', 'eng'])
console.log(programmer1.salary)
programmer1.lang = ['fra']
console.log(programmer1.lang)
console.log(programmer3.lang)
console.log(programmer3.age)