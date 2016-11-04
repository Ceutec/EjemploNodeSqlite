//Espress - Backend
var express = require('express')
var app = express()

//Ejs - Frontend
app.set('view engine', 'ejs')

//Sqlite3 - BDD
var sqlite3 = require('sqlite3').verbose()



app.get('/', function(req, res) {

  var mensajes = []

  var db = new sqlite3.Database("bdd.sqlite3")
  db.all("select * from mensajes;", function(err, rows)
  {  
    rows.forEach(function (row) {  
      mensajes.push([row.usuario, row.mensaje])
    })
    res.render('index', { mensajes: mensajes })
  });
  db.close();

});
  
app.listen(8000)
