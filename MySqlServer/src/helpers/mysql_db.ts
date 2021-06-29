'use strict'

import { sendBadRequest, sendCreated } from './response-status';

import config from 'config';

const mysql = require('mysql');

const deleteDatabase = "DROP DATABASE IF EXISTS " + config.get('database.db_name');
const createDataBaseQuery = "CREATE DATABASE " + config.get('database.db_name');

const createTableAircrafts = "CREATE TABLE aircrafts( " +
  "id INT NOT NULL AUTO_INCREMENT, " +
  "name VARCHAR(100) NOT NULL, " +
  "title VARCHAR(40) NOT NULL, " +
  "PRIMARY KEY (id)" +
  ") ENGINE=INNODB";

const createTablePositions = "CREATE TABLE positions ( " +
  "id INT NOT NULL AUTO_INCREMENT, " +
  "lon DECIMAL(11,8) NOT NULL, " +
  "lat DECIMAL(11,8) NOT NULL, " +
  "aircraftId INT NOT NULL, " +
  "sendTime TIMESTAMP DEFAULT CURRENT_TIMESTAMP, " +
  "PRIMARY KEY (id), " +
  "CONSTRAINT fk_aircraft FOREIGN KEY (aircraftId) REFERENCES aircrafts(id) ON UPDATE CASCADE ON DELETE RESTRICT " +
  ") ENGINE=INNODB";

var mySqlConnection = mysql.createConnection({
  host: config.get('database.host'),
  user: config.get('database.user'),
  password: config.get('database.password'),
  database: config.get('database.db_name'),
  insecureAuth : true,
  multipleStatements: true
});

mySqlConnection.connect(function(err: any){
  if(err){
      console.log("Mysql Connection Failed : " + JSON.stringify(err, undefined,2));
      throw err;
  };

  /*
  mySqlConnection.query(deleteDatabase, (err: { message: any; }, results: any, fields: any) => {
    if(!err){
     console.log("Deleted Database " + config.get('database.db_name'));
  }else{
    console.log("Error delete Database " + config.get('database.db_name'));
  }
  })
  */

  /*
  mySqlConnection.query(createDataBaseQuery, (err: { message: any; }, results: any, fields: any) => {
    if(!err){
      console.log("Created Database " + config.get('database.db_name'));
    }else{
      console.log("Error create Database " + config.get('database.db_name'));
    }
  });
 
  */

  /*
  mySqlConnection.query("DROP TABLE aircrafts", (err: { message: any; }, results: any, fields: any) => {
    if(!err){
      console.log("DROP table aircrafts ");
    }else{
      console.log("DROP table aircrafts ");
    }
  });
  
  mySqlConnection.query("DROP TABLE positions", (err: { message: any; }, results: any, fields: any) => {
    if(!err){
      console.log("DROP table positions ");
    }else{
      console.log("DROP table positions ");
    }
  });
  

 
  mySqlConnection.query(createTableAircrafts, (err: { message: any; }, results: any, fields: any) => {
    if(!err){
      console.log("Created table aircrafts ");
    }else{
      console.log("Error create table aircrafts ");
    }
  });
  
  
  mySqlConnection.query(createTablePositions, (err: { message: any; }, results: any, fields: any) => {
    if(!err){
      console.log("Created table positions ");
    }else{
      console.log("Error create table positions ");
    }
  });
  */
 
  console.log("Mysql Connected");
})



module.exports = mySqlConnection;
