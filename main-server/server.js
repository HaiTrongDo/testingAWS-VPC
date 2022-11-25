const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const AWS = require('aws-sdk');
//Allow all requests from all domains & localhost
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const dummyData = [
    {
        "id": "234kjw",
        "text": "Eggs"
    },
    {
        "id": "as82w",
        "text": "Milk"
    },
    {
        "id": "234sk1",
        "text": "Bacon"
    },
    {
        "id": "ppo3j3",
        "text": "Frog Legs"
    }
];


app.get('/main', function(req, res) {
    console.log("GET From SERVER port 3000");
    res.send({data:"data from main server port 3000",ingredients: dummyData});
});


app.get('/sub', async function(req, res) {
    console.log("GET From SERVER");
//fetch data at port 2000
    let callPort2000= await axios.post('/user', {
        firstName: 'Fred',
        lastName: 'Flintstone'
    })

});



app.listen(3000, function() {
    console.log("First server running on port 3000");
});
