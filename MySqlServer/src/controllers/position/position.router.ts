/** Pakage imports */
import * as express from 'express';

import{
    createPosition,
    createPositions,
    deleteAllPositons,
    deletePositon,
    findAllPositionWithAircraftId,
    getPositions,
    getSinglePosition,
    updateAircraftIdForPositions,
    updatePosition,
} from './position.controller';

import { logTime } from '../../middlewares/timelogger.middleware';
import { wrapAsync } from '../../middlewares/errorhandler.middleware';

/** Variables */
export const positionRouter: express.Router = express.Router({mergeParams: true});
/** Get all Aircrafts */
positionRouter.get('/', logTime, wrapAsync(getPositions));
/** Get Single Aircraft */
positionRouter.get('/:positionId', logTime, wrapAsync(getSinglePosition));
/** Get Position by aircraftId */
positionRouter.get('/findPositionByAircraftId/:aircraftId', logTime, wrapAsync(findAllPositionWithAircraftId));
/** CREATE */
positionRouter.post('/', logTime, wrapAsync(createPosition));
/** CREATE */
positionRouter.post('/addMultiple/:number', logTime, wrapAsync(createPositions));
/** Update Aircraft */
positionRouter.put('/update/:positionId', logTime, wrapAsync(updatePosition));

/** Update Aircraft */
positionRouter.put('/updateAircraftIdForPositions', logTime, wrapAsync(updateAircraftIdForPositions));

/** Delete Aircraft */
positionRouter.delete('/delete/:positionId', logTime, wrapAsync(deletePositon));
/** delete all Positions */
positionRouter.delete('/deleteAll', logTime, wrapAsync(deleteAllPositons));