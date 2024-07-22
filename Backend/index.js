const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/Users');
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/curd", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });

app.get('/', (req, res) => {
  UserModel.find({})
    .then(users => res.json(users))
    .catch(err => res.status(500).json({ error: 'Internal Server Error' }));
});
app.get('/getUser/:id',(req,res)=>{
    const id=req.params.id;
    UserModel.findById({_id})
    .then(users => res.json(users))
    .catch(err => res.status(500).json({ error: 'Internal Server Error' }));
})
app.put('/updateUser/:id',(req,res)=>{
    const id=req.params.id;
    UserModel.findByIdAndUpdate({_id: id},{Name:req.body.Name,Email:req.body.Email,Age:req.body.Age})
    .then(users => res.json(users))
    .catch(err => res.json(err));
})
app.delete('/deleteUser/:id',(req,res)=>{
    const id=req.params.id;
    UserModel.findByIdAndDelete({_id: id})
    .then(res => res.json(res))
    .catch(err => res.json(err))
})


app.post("/createUser", (req, res) => {
  UserModel.create(req.body)
    .then(users => res.status(201).json(users))
    .catch(err => res.status(400).json({ error: err.message }));
});

app.listen(3001, () => {
  console.log("Server is Running");
});
