
const express = require('express');

const app = express();

const routerUsers= require('./Users/users.router')

app.use(express.json());

app.get('/' , (req, res) => {
    res.status(200).json({message:'Sever OK!'})
});

app.use("/", routerUsers);



app.listen(9000, () => {
    console.log('http://localhost:9000')
}); 