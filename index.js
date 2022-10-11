//var http = require("http");

// create a server object
//http.createServer(function(req, res){
  //  res.write("Hello world!");
   // res.end();
//})
  //  .listen(8080);


const express = require("express")
const req = require("express/lib/request")

const app = express()

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.listen(8080)