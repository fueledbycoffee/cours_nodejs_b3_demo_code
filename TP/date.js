var moment = require('moment');

var date = {
    getDate: function() {
        console.log(new Date());
    },
    getDaysTillXmas: function(){
        // var date1 = new Date();
        // var nowel = new Date("2017-12-25");
        // var diff = nowel - date1;
        // console.log(diff/1000/60/60/24);
        var d1 = moment();
        var d2 = moment("2017-12-25");
        var diff = d2.diff(d1, 'days');
        console.log(diff);
    },
    getDaysTillMothersDay: function(){
        var date1 = new Date();
        var nowel = new Date("2018-05-27");
        var diff = nowel - date1;
        console.log(diff/1000/60/60/24);
    }
}

module.exports = date;