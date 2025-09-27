const express = require('express');
const data = require('./Data.json');
const f = require('fs');
const p = require('path');
const port =8080;
const app = express();
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Welcome to local host")
})

app.get('/user',(req,res)=>{
    res.json(data);
})

app.get('/user/:id',(req,res)=>{
    const id = Number(req.params.id)
    const user = data.find(
        user=> user.id === id
    )
    return res.json(user)
})
app.post('/user',(req,res)=>{
    const newUser=req.body;
    data.push(newUser)
    res.status(200).json({
        message: "user added successfully",
        user: data  
    })
})

app.put('/user/:id', (req, res) => {
    const id = Number(req.params.id); 
    const updatedUser = req.body; 
    const userIndex = data.findIndex(user => user.id === id);
    data[userIndex] = { ...data[userIndex], ...updatedUser }; 
    res.status(200).json({
        message: "User updated successfully",
        user: data[userIndex]
    });
})

app.get('/aboutUs', (req, res) => {
    const t = p.join(__dirname,  'aboutUs.html');
    console.log(t);
    res.sendFile(t);
});


app.listen(port)
console.log("server is running  http://localhost:8080")