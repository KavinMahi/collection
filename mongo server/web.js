// http server.......
// let http=require('http')
// let express=require('express')
// http.createServer((req,res)=>{
//     res.write("hello kavin")
//     res.end()
// }).listen(100)


// express server....
let a=require('express')
const body = require('body-parser');

let a1=a()
a1.use(body.urlencoded({ extends: true }))
a1.set('view engine', 'ejs');

a1.get('/', (req, res) => {
  res.send('<h1>hello kavin <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80"></h1>')

a1.get('/about', (req, res) => {
  res.render('about');
})
}).listen(2001,()=>console.log("run"));


// let db =require('mongoose');
// db.connect("mongodb://localhost:27017");
// mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true });
// const conSuccess = mongoose.connection
// conSuccess.once('open', _ => {
//   console.log('Database connected:', db)
// })
// (err)=>{
//     if(err){
//         console.log('hai');
//     }
//     else{
//         console.log("create");
//     }
// }

//  db.listen(100,()=>console.log('run'));

 


