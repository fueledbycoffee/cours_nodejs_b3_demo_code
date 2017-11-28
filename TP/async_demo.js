var http = require('http');
var url = "http://jsonplaceholder.typicode.com/posts";

http.get(url, function(res) {
    var body = '';

    res.on('data', function(chunk){
        body += chunk;
    });
    res.on('end', function() {
        body = JSON.parse(body);

        console.log(body[0].title);
    });
});