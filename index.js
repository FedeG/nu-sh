require('dotenv').config();
var mongoose = require('mongoose');
var multer = require('multer');
var path = require("path");
var cors = require('cors');
var express = require('express');
var bodyParser = require('body-parser');
var load = require('./backend/load_base.js');
var app = require("./authentication/server.js");
var api = require('./backend/model.js').baucis;

app.set('port', (process.env.PORT || 5000));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use('/api', api());
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/mail', express.static(__dirname + '/static/mail'));
app.use('/static', express.static(__dirname + '/static'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',function(req,res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/detail',function(req,res){
  res.sendFile(__dirname + '/templates/detalle.html');
});

app.get('/carrito',function(req,res){
  res.sendFile(__dirname + '/templates/carrito.html');
});

app.get('/encargo/:number',function(req,res){
  var number = parseInt(req.params.number);
  mongoose.model('encargo').findOne({number: number})
    .exec()
    .then((encargo) => res.send(encargo))
    .catch((err) => res.send(err));
});

app.get('/encargo',function(req,res){
  res.sendFile(__dirname + '/templates/encargo.html');
});

var upload = multer();
app.post('/encargo', upload.array(), function (req, res, next) {
  mongoose.model('producto').findOne({name: req.body.producto})
    .exec()
    .then((producto) => {
      req.body.producto = producto;
      return mongoose.model('encargo').create(req.body)
    })
    .then((encargo) => res.redirect('/encargo?number='+encargo.number))
    .catch((err) => res.sendFile(__dirname + '/templates/encargo.html'));
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
});
