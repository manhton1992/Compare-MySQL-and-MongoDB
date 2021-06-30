/** Pakage imports */
import * as express from 'express';

import{
    createAirCraft,
    createAirCrafts,
    deleteAircraft,
    deleteAllAircrafts,
    getAirCrafts,
    getAirCraftsWithAllPosition,
    getSingleAircraft,
    updateAircraft,
} from './aircraft.controller';

import { logTime } from '../../middlewares/timelogger.middleware';
import { wrapAsync } from '../../middlewares/errorhandler.middleware';

/** Variables */

export const aircraftRouter: express.Router = express.Router({mergeParams: true});

/** Get all Aircrafts */
aircraftRouter.get('/', logTime, wrapAsync(getAirCrafts));
/** Get Single Aircraft */
aircraftRouter.get('/:aircraftId', logTime, wrapAsync(getSingleAircraft));
/** CREATE */
aircraftRouter.post('/', logTime, wrapAsync(createAirCraft));
/** CREATE With Number*/
aircraftRouter.post('/addMultiple/:number', logTime, wrapAsync(createAirCrafts));
/** Update Aircraft */
aircraftRouter.put('/update/:aircraftId', logTime, wrapAsync(updateAircraft));
/** Delete Aircraft */
aircraftRouter.delete('/delete/:aircraftId', logTime, wrapAsync(deleteAircraft));
/** Get Single Aircraft with all positions */
aircraftRouter.get('/allpositions/:aircraftId/', logTime, wrapAsync(getAirCraftsWithAllPosition));
/** Delete Aircraft */
aircraftRouter.delete('/deleteAll', logTime, wrapAsync(deleteAllAircrafts));


