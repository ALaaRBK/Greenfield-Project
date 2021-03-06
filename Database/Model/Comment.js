var db = require('../config');
var mongoose = require('mongoose');
var Promise = require('bluebird');
var User=require('./User');
var Movie=require('./movieList');

//create our comment model 
var commentSchema = mongoose.Schema({
	id: Number,
	comment: { type: String, required: true },
	users:String,
	movies:{type:mongoose.Schema.Types.ObjectId,ref:'movieList'},
	title : String

});

var Comment = mongoose.model('Comment' , commentSchema);


module.exports = Comment;