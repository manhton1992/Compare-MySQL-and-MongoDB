/**
 * Landing file for NodeJs
 */

/** Package imports  */
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import config from 'config';

/** Module imports */
import { globalRouter } from './controllers/router';
import { globalErrorHandler, ignoreFavicon} from './middlewares/errorhandler.middleware';

/**Variables */
var cors = require('cors');
export const app :express.Application = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var datetime = require('node-datetime');


/** Setup Database */
mongoose.connect(config.get('database.host'), {useNewUrlParser : true});

/** */

/** Setup Mysql DB */

app.use('/api', globalRouter);
app.use(globalErrorHandler);
app.use(ignoreFavicon);

 /** Start server */
app.listen(config.get('server.port'), () => {
  console.log('Aircraft Server is running...');
});

console.log(process.env.NODE_EVN);