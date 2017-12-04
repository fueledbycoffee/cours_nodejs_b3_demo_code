var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = mongoose.model('User');

var PostSchema = new Schema({
    title : String,
    content : String,
    permalink : String,
    author : String,
    date : Date,
    published : Boolean,
    comments: [{
        author : String,
        message : String,
        date : String
    }],

    user : { type: mongoose.Schema.Types.ObjectId, ref: "User"}
});

var Post = mongoose.model('Post', PostSchema);