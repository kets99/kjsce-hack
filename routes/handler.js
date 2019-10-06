var express = require('express');
var router = express.Router();
var path = require('path');
//var queries = require(path.join(__dirname,'../model/queries'));
 const mime = require('mime');
//var multer = require('multer');
var request = require('request');
//var query = require('.././model/queries');
var firebase = require('firebase/app');

const admin = require('firebase-admin');
const serviceAccount = require('./ServiceAccountKey.json') ; 

admin.initializeApp({

	credential : admin.credential.cert(serviceAccount)


}) ;


var queries = require(path.join(__dirname,'../model/queries'));

 //firebase = require("firebase/firestore");
var firebaseConfig = {
  apiKey: "AIzaSyAXQTjSq-RjCqPiN_OqRUETRYWF1zn6dek",
  authDomain: "legs-miserable.firebaseapp.com",
  databaseUrl: "https://legs-miserable.firebaseio.com",
  projectId: "legs-miserable",
  storageBucket: "legs-miserable.appspot.com",
  messagingSenderId: "sender-id"
 

};

var db = admin.firestore() ; 



console.log("work?");

router.get('/',(req,res)=>{
   console.log("here?");
   res.render('dashboard',{layout : 'dashboard.handlebars'});


console.log("work?");
// Add a new document in collection "cities" with ID 'LA'
 db.collection('users1').add({
  kkk: "Los Angeles"
}).then(ref => {

  console.log('Added document with ID: ', ref.id);
}).catch(e=>console.log(e));


});


router.get('/create_event',(req,res)=>{
    console.log("here?");
   res.render('create_event',{layout : 'create_event.handlebars'});

console.log("logged");
// queries.worka() ; 

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