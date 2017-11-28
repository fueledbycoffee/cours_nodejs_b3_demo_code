var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
    title : String,
    content : String,
    permalink : String,
    author : String,
    date : Date,
    published : Boolean
});

var Post = mongoose.model('Post', PostSchema);