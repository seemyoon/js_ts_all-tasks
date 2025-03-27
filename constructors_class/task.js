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