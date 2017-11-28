var fs = require('fs');
var Controller = require('./controller');

var Router = () => {
    var self = this;

    self.routes = [];

    self.get =  (url, method, callback) => {
        var controller = self.routes.filter((el) => {
            return el.key == url;
        })[0];
        if(controller)
            controller.value.getData(function(data){
                callback(data);
            });
        else
            callback("File not found", null);
    };
    self.getSync = (url) => {
        var path = self.routes.filter((el) => {
            return el.key == url;
        })[0];
        return  fs.readFileSync(__dirname + '/' + path.value, 'utf8');
    }; 
    self.register =  (url, controller) => {
        self.routes.push({ 'key': url, 'value' : controller });
    }
    return self;
}

module.exports = Router();