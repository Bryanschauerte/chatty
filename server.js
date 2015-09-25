var http = require('http');
var server = http.createServer();
var messages = [];

server.listen(8887);

server.on('request', function(request, response){

  if(request.method == 'OPTIONS'){
    response.writeHead(200, {
    'Connection': 'close',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
  });
  response.end();
}



  if(request.method == 'GET'){
    response.writeHead(200, {
    'Connection': 'close',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
  });


    response.end(JSON.stringify(messages))
  }
  if(request.method == 'POST'){

    var postData = '';


    request.on('data', function(partial){
      postData += partial.toString();
    });

    request.on('end', function(){
      messages.push(JSON.parse(postData));

      // res.writehead - status- then object{}
      response.writeHead(200, {
      'Connection': 'close',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    });

      response.end(JSON.stringify(messages))
      console.log(messages);
      })

  }

})
