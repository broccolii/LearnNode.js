var http = require("http");
var url = require("url");
var querystring = require('querystring');
var util = require('util');

function start(route) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
    route(pathname);

    var post = '';
    request.on('data', function(chunk){
        post += chunk;
    });

    request.on('end', function(){
        response.writeHead(200, {"Content-Type": "text/plain;charset=utf-8"});
        post = querystring.parse(post);
        console.log(post["username"])
        if (post["username"] == "wujingpeng" && post["password"] == "mima") {
          response.end("请求成功");
        } else {
          response.end();
        }

    });
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;
