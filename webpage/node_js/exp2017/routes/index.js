var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// router.get('/',function(req,res){
// 	//res.send(404);
// 	res.render('index',{
// 		title: 'My App!'

// 	})

// });

router.get('/', function(req,res){
	res.sen(200);
});


module.exports = router;
