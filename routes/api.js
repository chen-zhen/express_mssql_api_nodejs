var express = require('express');

var router = express.Router();
var sql = require('mssql');
var config = require('../config.json');


// var mssql = require('mssql');

router.get('/vd_ky', function(req, res) {
	
	// console.log('/images1')
	sql.connect(config, function(err) {
    // ... error checks 
 	
    new sql.Request().query('select top 10 * from vd_gps_keyword').then(function(recordset){
		//res.header('Access-Control-Allow-Origin', '*');   
    	res.json(recordset);
			

    })
 
   
});
 
  

    
});

router.route('/images/:id')
.get(function (req, res) {
	// body...
	res.json({
		id: req.params.id,
		message: 'The GET ID ' +req.params.id
	})

});

module.exports = router;