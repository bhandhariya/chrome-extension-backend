var express = require('express');
var router = express.Router();
var Template=require('../model/template_model.js');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/create', function(req, res, next) {
var temp=new Template({
  name:req.body.name,
  template:req.body.template
})
temp.save(function(err,result){
  if(!err && result){
    return res.send(result)
  }else{
    console.log(err);
  }
})

});


module.exports = router;
