function servermake()
{
    let http=require('http');
    var url = require('url');
    let server=http.createServer(function(req,resp){
        

        let name=req.url;
        let name2=url.parse(name,true).query;

        resp.end(name2.fname);
    });

    server.listen(3000);
}

servermake();