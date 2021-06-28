/**
 * Landing file for NodeJs
 */

/** Package imports  */
import express, { json, urlencoded } from 'express';
import { globalErrorHandler, ignoreFavicon } from './middlewares/errorhandler.middleware';

import config from 'config';
/** Module imports */
import { globalRouter } from './controllers/router';

// Connect to MongoDb
const db = require('./helpers/db');

/**Variables */
var cors = require('cors');
export const app :express.Application = express();
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
var datetime = require('node-datetime');

app.use('/api', globalRouter);
app.use(globalErrorHandler);
app.use(ignoreFavicon);

 /** Start server */
app.listen(process.env.PORT || config.get('server.port'), () => {
  console.log('Aircraft Server is running ...on ' + config.get('server.port'));
});
