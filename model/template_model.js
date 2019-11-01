var mongoose=require('mongoose');
var Schema= mongoose.Schema;

var templateSchema=new Schema({
  name:{type:String},
  template:{type:String},
})

module.exports=mongoose.model("template",templateSchema);
