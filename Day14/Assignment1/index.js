let express = require('express')
let app=express()
let url=require('url')
let dataFile=require('./Data.json')

app.get('/',(req,res)=>{
    res.json(dataFile);
});

app.post('/abc',(req,res)=>{
    res.json(dataFile)
});

app.get('/:id',(req,res)=>{
    let id=Number(req.params.id);
    console.log(id);

    for(let i=0;i<dataFile.length;i++)
    {
        
        if(dataFile[i].id === id)
        {
            res.json(dataFile[i]);
        }
    }
});

app.post('add1//:id',(req,res)=>{
    let id=Number(req.params.id);
    console.log(id);

    for(let i=0;i<dataFile.length;i++)
    {
        if(dataFile[i].id === id)
        {
            res.json(dataFile[i]);
        }
    }
});

app.post('/add',(req,res)=>{
console.log('push');
    console.log(req.body);
    let id=Number(req.params.id);
    console.log(id);

    for(let i=0;i<dataFile.length;i++)
    {
        if(dataFile[i].id === id)
        {
            res.json(dataFile[i]);
        }
    }

    res.send();
});

app.delete('/:id',(req,res)=>{
    let id=Number(req.params.id);
    console.log(id);

    for(let i=0;i<dataFile.length;i++)
    {
        
        if(dataFile[i].id === id)
        {
            res.json("Data deleted");
            dataFile.splice(id, 1);
           
        }
    }
});

//add data by put method(we also can do it with post also)
app.use(express.urlencoded({ extended: false }))
app.post('/put',(req,res)=>{

    console.log(req.body);
 
    let data=req.body
    dataFile.push(
        {data, id: dataFile.length + 1}
    )
    res.json(dataFile);
})

app. listen(8080);