var fs = require('fs');

function Controller() {
    var self = this;

    self._path = null;

    self.path = (path) => {
        _path = path;
        self.data = fs.readFileSync(__dirname + "/" + path, 'utf8');
        return self;
    }

    self.data = null;


    self._method = "GET";

    self.method = (method) => {
        self._method = method;
        return self;
    }

    self._engineRender = null

    self.setEngineRender = (action) => {
        self._engineRender = action;
    }

    self.getData = (callback) => {
        if(self._engineRender == null)
        {
            callback(self.data);
        }
        else
        {
            self._engineRender(function(data) {
                callback(data);
            });
        }
    }

    self._status = "200";
    self._request = null;

    self.request = (req) => {
        self._request = req;
        return self;
    }

    self.status = (st) => {
        self._status = st;
        return self;
    }

    self.send = (body) => {
        
    }

    return self;
}

module.exports = Controller;