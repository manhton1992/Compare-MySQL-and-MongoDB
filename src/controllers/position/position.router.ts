/** Pakage imports */
import * as express from 'express';
import { logTime } from '../../middlewares/timelogger.middleware';
import { wrapAsync } from '../../middlewares/errorhandler.middleware';
import{
    getPositions,
    getSinglePosition,
    createPosition,
    updatePosition,
    deletePositon,
} from './position.controller';
/** Variables */
export const positionRouter: express.Router = express.Router({mergeParams: true});
/** Get all Aircrafts */
positionRouter.get('/', logTime, wrapAsync(getPositions));
/** Get Single Aircraft */
positionRouter.get('/:positionid', logTime, wrapAsync(getSinglePosition));
/** CREATE */
positionRouter.post('/', logTime, wrapAsync(createPosition));
/** Update Aircraft */
positionRouter.put('/update/:positionid', logTime, wrapAsync(updatePosition));
/** Delete Aircraft */
positionRouter.delete('/delete/:positionid', logTime, wrapAsync(deletePositon));