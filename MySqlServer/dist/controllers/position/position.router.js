"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.positionRouter = void 0;
/** Pakage imports */
const express = __importStar(require("express"));
const position_controller_1 = require("./position.controller");
const timelogger_middleware_1 = require("../../middlewares/timelogger.middleware");
const errorhandler_middleware_1 = require("../../middlewares/errorhandler.middleware");
/** Variables */
exports.positionRouter = express.Router({ mergeParams: true });
/** Get all Aircrafts */
exports.positionRouter.get('/', timelogger_middleware_1.logTime, errorhandler_middleware_1.wrapAsync(position_controller_1.getPositions));
/** Get Single Aircraft */
exports.positionRouter.get('/:positionId', timelogger_middleware_1.logTime, errorhandler_middleware_1.wrapAsync(position_controller_1.getSinglePosition));
/** Get Position by aircraftId */
exports.positionRouter.get('/findPositionByAircraftId/:aircraftId', timelogger_middleware_1.logTime, errorhandler_middleware_1.wrapAsync(position_controller_1.findAllPositionWithAircraftId));
/** CREATE */
exports.positionRouter.post('/', timelogger_middleware_1.logTime, errorhandler_middleware_1.wrapAsync(position_controller_1.createPosition));
/** CREATE */
exports.positionRouter.post('/addMultiple/:number', timelogger_middleware_1.logTime, errorhandler_middleware_1.wrapAsync(position_controller_1.createPositions));
/** Update Aircraft */
exports.positionRouter.put('/update/:positionId', timelogger_middleware_1.logTime, errorhandler_middleware_1.wrapAsync(position_controller_1.updatePosition));
/** Update Aircraft */
exports.positionRouter.put('/updateAircraftIdForPositions', timelogger_middleware_1.logTime, errorhandler_middleware_1.wrapAsync(position_controller_1.updateAircraftIdForPositions));
/** Delete Aircraft */
exports.positionRouter.delete('/delete/:positionId', timelogger_middleware_1.logTime, errorhandler_middleware_1.wrapAsync(position_controller_1.deletePositon));
/** delete all Positions */
exports.positionRouter.delete('/deleteAll', timelogger_middleware_1.logTime, errorhandler_middleware_1.wrapAsync(position_controller_1.deleteAllPositons));
//# sourceMappingURL=position.router.js.map