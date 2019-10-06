var express = require('express');
var router = express.Router();
var path = require('path');
//var queries = require(path.join(__dirname,'../model/queries'));
 const mime = require('mime');
//var multer = require('multer');
var request = require('request');
//var query = require('.././model/queries');

var queries = require(path.join(__dirname,'../model/queries'));



router.get('/',(req,res)=>{
    console.log("here?");
   res.render('dashboard',{layout : 'dashboard.handlebars'});

});


router.get('/create_event',(req,res)=>{
    console.log("here?");
   res.render('create_event',{layout : 'create_event.handlebars'});

console.log("logged");
queries.worka() ; 

});
router.get('/clist',(req,res)=>{
    console.log("here?");
   res.render('credit_details',{layout : 'credit_details.handlebars'});



});






router.get('/checkpt',(req,res)=>{
    console.log("here?");
   res.render('checkpt1',{layout : 'checkpt1.handlebars'});

});


module.exports=router;