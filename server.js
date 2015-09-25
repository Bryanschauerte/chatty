// var http = require('http');
var express = require('express');
var app = express;
// var server = http.createServer();
var messages = [];

var bodyParser = require('body-parser');


//how to use middleware
//app.use(bodyParser());

//ofr app.use(function(req, res, next){ console.log(req); next() }) good for debugging and dealing with headers
//app.use('/', function(req, res, next)) routes? '/' any app
app.use('/', bodyParser.json());// also xml one lets everything use req.body (exept body)



app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/', function(req, res) {

  //res.type('application/json'); beause using json helper
	res.setHeader('Access-Control-Allow-Origin', '*');
  res.json(messages);

	//  same as about and uses this res.send(JSON.stringify(messages));
});


app.post('/', function(req, res) {
  messages.push(req.body);

  //will be the array of things due to the body above

  res.send();

});




app.listen(8080);

//Keeping the commented out to better understand the middleware express
// server.on('request', onRequest);
//
//
// function onRequest(request, response){
//
//   if(request.method == 'OPTIONS'){
//     response.writeHead(200, {
//     'Connection': 'close',
//     'Content-Type': 'application/json',
//     'Access-Control-Allow-Origin': '*',
//     'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
//     'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
//   });
//   response.end();
// }
//
//
//
//   if(request.method == 'GET'){
//     response.writeHead(200, {
//     'Connection': 'close',
//     'Content-Type': 'application/json',
//     'Access-Control-Allow-Origin': '*',
//     'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
//     'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
//   });
//
//
//     response.end(JSON.stringify(messages))
//   }
//   if(request.method == 'POST'){
//
//     var postData = '';
//
//
//     request.on('data', function(partial){
//       postData += partial.toString();
//     });
//
//     request.on('end', function(){
//       messages.push(JSON.parse(postData));
//
//       // res.writehead - status- then object{}
//       response.writeHead(200, {
//       'Connection': 'close',
//       'Content-Type': 'application/json',
//       'Access-Control-Allow-Origin': '*',
//       'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
//       'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
//     });
//
//       response.end(JSON.stringify(messages))
//       console.log(messages);
//       })
//
//   }
//
// })
