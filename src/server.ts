/**
 * Landing file for NodeJs
 */

import { globalErrorHandler, ignoreFavicon } from './middlewares/errorhandler.middleware';

import bodyParser from 'body-parser';
import config from 'config';
/** Package imports  */
import express from 'express';
/** Module imports */
import { globalRouter } from './controllers/router';
import mongoose from 'mongoose';
import { servicesVersion } from 'typescript';

/**Variables */
var cors = require('cors');
export const app :express.Application = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var datetime = require('node-datetime');


/** Setup Database */
mongoose.connect(config.get('database.host'), {useNewUrlParser : true});

/*
mongoose.connect('mongodb://localhost:27017/aircraft', { useNewUrlParser: true }).
  catch(error => handleError(error));
  */
/** */

/** Setup Mysql DB */

app.use('/api', globalRouter);
app.use(globalErrorHandler);
app.use(ignoreFavicon);

 /** Start server */
app.listen(config.get('server.port'), () => {
  console.log('Aircraft Server is running ...');
});

console.log(process.env.NODE_EVN);

function handleError(error: any): any {
  throw new Error('Function not implemented.');
}
