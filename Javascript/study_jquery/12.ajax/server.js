var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain', 'Access-Control-Allow-Origin':'*','Access-Control-Allow-Methods':'GET,POST'});
    if(req.url === "/json"){
        console.log("this reuqest url this json");
        if(req.method == "GET"){
            console.log("get request");
            res.end("get request");
        }else if(req.method == "POST"){
            console.log("post request");
            res.end('post request');
        }

    }else{
        res.end('Hello World\n');
    }
}).listen(1337, "127.0.0.1",function(){
    console.log("Server running at http://127.0.0.1:1337");
});

