var mongoose = require('mongoose');

// var mongoURI = "mongodb://localhost:27017/digital-App-1";

var mongoURI = "mongodb://raja:mentcom123@ds147096.mlab.com:47096/digitalapp";

mongoose.Promise = global.Promise;
mongoose.connect(mongoURI,{useNewUrlParser:true,useUnifiedTopology: true })
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("mongodb connection open");
});
exports.db = db;
