const { getAllUsers, getUsersById, createTask } = require('./users.controllers')

const getUsers = (req, res) => {
    const data = getAllUsers()
    res.status(200).json(data)
};

const getOneUser = (req, res) => {
    const id = req.params.id
    const data = getUsersById(id)
    if(data){
        res.status(200).json(data)
    } else {
        res.status(404).json({message: "Invalid ID"})
    }
};

const createNewUser = (req, res) => {
    const { name,email,password,birthday,country } = req.body

    if(name,email,password,birthday,country){
        const data =  createTask(name,email,password,birthday,country)
        res.status(201).json(data)
    } else {
        res.status(400).json({message:"Missing Data"})
    }
}

module.exports = {
    getUsers,
    getOneUser,
    createNewUser
}