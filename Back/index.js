const express = require('express');
require('./NameDB/config');
const User = require('./NameDB/cont_user');
const User2 = require('./NameDB/cont_user2');
const User3 = require('./NameDB/cont_user3');
const cors = require('cors')
const app = express();

app.use(express.json());
app.use(cors());

app.post('/register',async(req,resp)=>{
   const data= new User(req.body);
   const res = await data.save();
   app.post('/register', async (req, res) => {
    
  try {
    const data = new User(req.body);
    const result = await data.save();
    console.log(result);
    res.status(201).send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Error register user' });
  }
  
});
  console.warn(res);
  resp.send(res);
})

app.post('/contact',async(req,resp)=>{
  const data= new User2(req.body);
  const res = await data.save();
  app.post('/contact', async (req, res) => {
   
 try {
   const data = new User2(req.body);
   const result = await data.save();
   console.log(result);
   res.status(201).send(result);
 } catch (error) {
   console.error(error);
   res.status(500).send({ message: 'Error register user' });
 }
 
});
 console.warn(res);
 resp.send(res);
})

app.post('/hotel',async(req,resp)=>{
  const data= new User3(req.body);
  const res = await data.save();
  app.post('/hotel', async (req, res) => {
   
 try {
   const data = new User3(req.body);
   const result = await data.save();
   console.log(result);
   res.status(201).send(result);
 } catch (error) {
   console.error(error);
   res.status(500).send({ message: 'Error register user' });
 }
 
});
 console.warn(res);
 resp.send(res);
})


app.listen(5011);










// const express = require('express');
// require('./NameDB/config');
// const User = require('./NameDB/cont_user');
// const cors = require('cors')
// const app = express();

// app.use(express.json());
// app.use(cors());

// app.post('/register',async(req,resp)=>{
//    const data= new User(req.body);
//    const res = await data.save();
//    app.post('/register', async (req, res) => {
    
//   try {
//     const data = new User(req.body);
//     const result = await data.save();
//     console.log(result);
//     res.status(201).send(result);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send({ message: 'Error bookinging user' });
//   }
// });
//   console.warn(res);
//   resp.send(res);
// })

// app.listen(4000);


