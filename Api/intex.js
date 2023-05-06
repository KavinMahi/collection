let a = require("express")
let mongoose = require('mongoose')

let a1 = a()
a1.use(a.json());
let scma = require('./scma');

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://0.0.0.0:27017', (err) => {
    if (err) {
        console.log("error");
    }
    else {
        console.log("conected");
    }
})
a1.get('/', (req, res) => {
    // res.send("<h1>hello</h1>")
    let db = scma.find()
    res.json(db)
}).listen(2002, (console.log("run")));