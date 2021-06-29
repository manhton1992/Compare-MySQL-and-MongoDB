/**
 * Helper functions for send response status
 */

import {Response} from 'express';
var fs = require("fs");
console.log("Starting Reading Json");
//export const readJsonDaten = (res: Response, data: any): void => {
    let path = "../data/frankfurt_airport.json";
    //let contents = fs.readFileSync(path);
    //let jsonContent = JSON.parse(contents);
    var obj = require(path);
    console.log("name :", obj);
 //};