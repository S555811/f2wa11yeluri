var express = require('express');



var router = express.Router();



/* GET home page. */



router.get('/', function(req, res, next) {



  var number1 = Math.random()*10;



  var number2 = Math.random() *10;



  var number3 = Math.random() *10;



  var imul = Math.imul(number1);

 

  var log = Math.log(number2);



  var log10 = Math.log10(number3);



  res.render('computation', { title: 'Vengalarao Yeluri',



  number1:number1,



  number2:number2,



  number3:number3,



  imul:imul,



  log:log,



  log10:log10,



});

});



module.exports = router;