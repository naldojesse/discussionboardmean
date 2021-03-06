var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AnswerSchema = new mongoose.Schema ({
	content: String,
	_user: {type: Schema.Types.ObjectId, ref: 'User'},
	_topic: {type: Schema.Types.ObjectId, ref: 'Topic'},
	comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
	upvotes: { type: Number, default: 0},
	downvotes: {type: Number, default: 0}
})

mongoose.model('Answer', AnswerSchema)