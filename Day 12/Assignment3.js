function file()
{
    let f=require('fs');
    //f.open('Atul.txt');

    setTimeout(()=>{
        
    f.writeFile('Atul.txt',"hello this data After the asyn function call", (err,value)=>{
            if(err)
            {
                console.log(err);
            }
    });

     f.readFile("Atul.txt",'utf8', (err,value)=>{
        if(err)
        {
            console.log(err);
        }else{
            console.log(value)
        }
    })


},2000)

f.writeFile('Atul.txt',"hello", (err,value)=>{
            if(err)
            {
                console.log(err);
            }
    });

    
    f.readFile("Atul.txt",'utf8', (err,value)=>{
        if(err)
        {
            console.log(err);
        }else{
            console.log("read :" +value)
        }
    })
}

file()