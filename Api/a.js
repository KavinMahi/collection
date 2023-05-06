const express =  require('express');
const app = express();
 app.use(express.json());
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const arjun = require('./scma');


mongoose.connect('mongodb://0.0.0.0:27017',(err)=>{
    if(err){
       console.log(err);
       res.json(err)
    }
    else{
        // res.json('connected db')
    console.log("connected");


        
    }

});

app.get('/',async(req,res)=>{
    res.json('running')
    const vj =  await  arjun.find();
    res.json(vj)

})



app.listen(900,()=>console.log("hello"))
