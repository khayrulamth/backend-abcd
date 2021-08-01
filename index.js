const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(cors());

let jsonParser = bodyParser.json()


app.get('/', (req, res) => {
        res.send("love you ");
});


const users = ['asad', 'mooin','kala', 'badal', 'saaj']

app.get('/fruits/banana', (req, res) => {
    res.send({ product: 'banana', price: 300, quantity: 45 });
})

app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    const name = users[userId];
    res.send({userId,name});
    console.log(name);
})

app.post('/addUser',jsonParser, (req, res) => {
    const user = req.body;
    user.id = 44;
    res.send(user);
})


app.listen(3000, () => {
    console.log('creating in port 3000');
});