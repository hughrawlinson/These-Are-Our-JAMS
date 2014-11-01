var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://'+process.env.DATABASE_USER+':'+process.env.DATABASE_PASSWORD+'@'+process.env.DATABASE_URL+'/'+process.env.DATABASE_NAME);

var CorpusSchema = new Schema({
	displayName: String,
	email: String,
	githubId: {
		type:String,
		unique:true
	},
	githubProfile: String,
	provider: String,
	Corpusname: String,
	avatarURL: String
});

module.exports = mongoose.model('Corpus', CorpusSchema);