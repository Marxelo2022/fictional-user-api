const uuid = require('uuid')

const usersDB = [{
    id: uuid.v4(),
    name:"Marcelo",
    email:"Marcelo452@gmail.com",
    password:"users147",
    birthday:"15/05/2001",
    country:"Bolivia",
},
{
    id: uuid.v4(),
    name:"Humberto",
    email:"Humber175@gmail.com",
    password:"tests45",
    birthday:"20/09/1998",
    country:"Peru",
}];

const getAllUsers = () => {
    return usersDB
};

const getUsersById = (id) => {
    const data = usersDB.find(task => task.id === id)
    return data
};

const createTask = (name,email,password,birthday,country) => {
    const newUser = {
        id: uuid.v4(),
        name,
        email,
        password,
        birthday,
        country
    }
    usersDB.push(newUser)
    return newUser
};

module.exports = {
    getAllUsers, 
    getUsersById,
    createTask
}