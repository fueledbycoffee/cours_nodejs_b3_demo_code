var http = require('http');
var router = require('./router');
var pug = require('pug');
var Controller = require('./controller');


var pugController = new Controller()
    .method('GET');

pugController.setEngineRender((callback) => {
    callback(pug.renderFile(__dirname + '/views/index.pug', { name : "Toto" }));
});

var defaultController = new Controller()
    .method('GET')
    .path('views/index.html');

router.register('/pug', pugController);
router.register('/', defaultController);

http.createServer((request, response) => {
    response.writeHead(200);
    router.get(request.url, request.method, function(data){
        if(data)
        {
            response.write(data);
            response.end();
        }
        else
        {
            response.write("Something went wrong !");
            response.end();
        }
    });
    // response.end();
}).listen(3000);
console.log('Serveur lancé sur http://localhost:3000');

// router.get('/toto', function(err, data){
//     console.log(data);
// });