const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
 }));
 var mySqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'aircraft',
    insecureAuth : true,
    multipleStatements: true
});

mySqlConnection.connect(function(err){
    if(err){
        console.log("Mysql Connection Failed : " + JSON.stringify(err, undefined,2));
        throw err;
    };
    console.log("Mysql Connected");
})

// Get all Aircrafts 
app.get("/api/mysqlaircrafts",function(req,res){
    console.log("OKOKO");
    
    mySqlConnection.query('SELECT * from aircrafts', function(err, rows, fields) {
      if (!err)
      res.send(rows);
      else
      res.send(err.message);
      });
    });

// Get an aircraft
app.get("/api/mysqlaircraft/:id",(req, res) => {
    mySqlConnection.query('SELECT * FROM aircrafts WHERE aircrafts.id = ?', [req.params.id], (err, rows, fields) => {
        if(! err){
            res.send(rows);
        }else{
            res.send(err.message);
        }
    });
});

// delete an aircraft
app.delete("/api/mysqlaircraft/:id",(req, res) => {
    mySqlConnection.query("DELETE FROM aircrafts WHERE id = ?", [req.params.id], (err, results, fields) => {
        if(! err){
            res.send(results);
        }else{
            res.send(err.message);
        }
    });
});

// Insert aircraft
app.post("/api/mysqlaircrafts", (req, res) => {
    const name = req.body.name;
    const title = req.body.title;
 
    var query = "INSERT INTO aircrafts (name, title) VALUES ('" + name + "', '" + title + "')";
    //var aircraft = req.params;
    mySqlConnection.query(query, (err, results, fields) => {
        if(!err){
            res.send("Inserted aircraft id: " + results.insertId);
        }else{
            res.send(err.message);
        }
    });
});

// update aircraft
app.put("/api/mysqlupdateaircraft/:id", (req, res) => {
    var id = req.params.id;
    var name = req.body.name;
    var title = req.body.title;
    
    var query = "UPDATE aircrafts SET name = ? , title = ? WHERE id = ?";
    mySqlConnection.query(query, [name, title, id], (err, results, fields) => {
        if(!err){
            res.send("updated: " + results.id);
        }else{
            res.send(err.message);
        }
    });
    
});
/**
 * Positions 
 */
// Get all Aircrafts 
app.get("/api/mysqlpositions",function(req,res){
    mySqlConnection.query('SELECT * from positions', function(err, rows, fields) {
      if (!err)
      res.send(rows);
      else
      res.send(err.message);
      });
    });

// Get an position
app.get("/api/mysqlposition/:id",(req, res) => {
    mySqlConnection.query('SELECT * FROM positions WHERE positions.id = ?', [req.params.id], (err, rows, fields) => {
        if(! err){
            res.send(rows);
        }else{
            res.send(err.message);
        }
    });
});

// Insert Positions
app.post("/api/mysqlpositions", (req, res) => {
    var lon = req.body.lon;
    var lat = req.body.lat;
    var aircraftId = req.body.aircraftId;
    var sendTime = req.body.sendTime;
    var query = "INSERT INTO positions (lon, lat, aircraftId, sendTime) VALUES ('" + lon + "', '" + lat + "', '" 
                                        + aircraftId + "', '" + sendTime + "')";
    mySqlConnection.query(query, (err, results, fields) => {
        if(!err){
            res.send("Inserted position id: " + results.insertId);
        }else{
            res.send(err.message);
        }
    });
});
// delete an position
app.delete("/api/mysqlposition/:id",(req, res) => {
    mySqlConnection.query("DELETE FROM positions WHERE id = ?", [req.params.id], (err, results, fields) => {
        if(! err){
            res.send(results);
        }else{
            res.send(err.message);
        }
    });
});
// update position
app.put("/api/mysqlupdateposition/:id", (req, res) => {
    var id = req.params.id;
    var lon = req.body.lon;
    var lat = req.body.laz;
    var aircraftId = req.body.aircraftId;
    var sendTime = req.body.sendTime;
    
    var query = "UPDATE positions SET lon = ? , lat = ? , aicraftId = ?, sendTime = ? WHERE id = ?";
    mySqlConnection.query(query, [lon, lat, aircraftId, sendTime, id], (err, results, fields) => {
        if(!err){
            res.send("updated: " + results.id);
        }else{
            res.send(err.message);
        }
    });
    
});

app.listen("3002", ()=> {
    console.log('Server started');
});

