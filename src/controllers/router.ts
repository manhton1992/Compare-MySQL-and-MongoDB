/**
 * Pakage imports
 */

 import * as express from 'express';
 import {aircraftRouter} from './aircraft/aircraft.router';
 import {positionRouter} from './position/position.router';
 export const globalRouter: express.Router = express.Router({mergeParams: true});

 /** /api/aircraft rounter */

 globalRouter.use('/aircraft', aircraftRouter);
 globalRouter.use('/position',positionRouter);
