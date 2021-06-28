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
    updatePosition,
} from './position.controller';

import { logTime } from '../../middlewares/timelogger.middleware';
import { wrapAsync } from '../../middlewares/errorhandler.middleware';

/** Variables */
export const positionRouter: express.Router = express.Router({mergeParams: true});
/** Get all Aircrafts */
positionRouter.get('/', logTime, wrapAsync(getPositions));
/** Get Single Aircraft */
positionRouter.get('/:positionid', logTime, wrapAsync(getSinglePosition));
/** Get Position with aircraftId */
positionRouter.get('/positionwithAircraftId/:aircraftId', logTime, wrapAsync(findAllPositionWithAircraftId));
/** CREATE */
positionRouter.post('/', logTime, wrapAsync(createPosition));
/** CREATE */
positionRouter.post('/addMultiple/:number', logTime, wrapAsync(createPositions));
/** Update Aircraft */
positionRouter.put('/update/:positionid', logTime, wrapAsync(updatePosition));
/** Delete Aircraft */
positionRouter.delete('/delete/:positionid', logTime, wrapAsync(deletePositon));
/** delete all Positions */
positionRouter.delete('/deleteAll', logTime, wrapAsync(deleteAllPositons));