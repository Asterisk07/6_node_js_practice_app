const http = require('http');
const fs = require("fs");
const hostname = '127.0.0.1';
const port = 3000;
const home=fs.readFileSync("./templates/home.html", "utf-8");
const index=fs.readFileSync("./templates/index.html", "utf-8");
const about=fs.readFileSync("./templates/about.html", "utf-8");

const server = http.createServer((req, res)=>{
    console.log(req.url);
    url = req.url;

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    if(url == '/'){
        res.end(index);
    }
    else if(url == '/i_can_type_any_random_stuff_here'){
        res.end(about);
    }
    else if(url == '/just_keep_it_same_in_anchor_tags_too'){
        res.end(home);
    }
    
    else{
        res.statusCode = 404;
        res.end("<h1>404 not found</h1>");
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });