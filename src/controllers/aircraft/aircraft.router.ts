/** Pakage imports */
import * as express from 'express';
import { logTime } from '../../middlewares/timelogger.middleware';
import { wrapAsync } from '../../middlewares/errorhandler.middleware';
import{
    getAirCrafts,
    createAirCraft,
    getSingleAircraft,
    updateAircraft,
    deleteAircraft,
    getAirCraftsWithAllPosition,
} from './aircraft.controller';

/** Variables */

export const aircraftRouter: express.Router = express.Router({mergeParams: true});

/** Get all Aircrafts */
aircraftRouter.get('/', logTime, wrapAsync(getAirCrafts));
/** Get Single Aircraft */
aircraftRouter.get('/:aircraftid', logTime, wrapAsync(getSingleAircraft));
/** CREATE */
aircraftRouter.post('/', logTime, wrapAsync(createAirCraft));
/** Update Aircraft */
aircraftRouter.put('/update/:aircraftid', logTime, wrapAsync(updateAircraft));
/** Delete Aircraft */
aircraftRouter.delete('/delete/:aircraftid', logTime, wrapAsync(deleteAircraft));
/** Get Single Aircraft with all positions */
aircraftRouter.get('/allpositions/:aircraftid/', logTime, wrapAsync(getAirCraftsWithAllPosition));


