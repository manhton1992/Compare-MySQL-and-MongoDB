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
exports.aircraftRouter = void 0;
/** Pakage imports */
const express = __importStar(require("express"));
const aircraft_controller_1 = require("./aircraft.controller");
const timelogger_middleware_1 = require("../../middlewares/timelogger.middleware");
const errorhandler_middleware_1 = require("../../middlewares/errorhandler.middleware");
/** Variables */
exports.aircraftRouter = express.Router({ mergeParams: true });
/** Get all Aircrafts */
exports.aircraftRouter.get('/', timelogger_middleware_1.logTime, errorhandler_middleware_1.wrapAsync(aircraft_controller_1.getAirCrafts));
/** Get Single Aircraft */
exports.aircraftRouter.get('/:aircraftId', timelogger_middleware_1.logTime, errorhandler_middleware_1.wrapAsync(aircraft_controller_1.getSingleAircraft));
/** CREATE */
exports.aircraftRouter.post('/', timelogger_middleware_1.logTime, errorhandler_middleware_1.wrapAsync(aircraft_controller_1.createAirCraft));
/** CREATE With Number*/
exports.aircraftRouter.post('/addMultiple/:number', timelogger_middleware_1.logTime, errorhandler_middleware_1.wrapAsync(aircraft_controller_1.createAirCrafts));
/** Update Aircraft */
exports.aircraftRouter.put('/update/:aircraftId', timelogger_middleware_1.logTime, errorhandler_middleware_1.wrapAsync(aircraft_controller_1.updateAircraft));
/** Delete Aircraft */
exports.aircraftRouter.delete('/delete/:aircraftId', timelogger_middleware_1.logTime, errorhandler_middleware_1.wrapAsync(aircraft_controller_1.deleteAircraft));
/** Get Single Aircraft with all positions */
exports.aircraftRouter.get('/allpositions/:aircraftId/', timelogger_middleware_1.logTime, errorhandler_middleware_1.wrapAsync(aircraft_controller_1.getAirCraftsWithAllPosition));
/** Delete Aircraft */
exports.aircraftRouter.delete('/deleteAll', timelogger_middleware_1.logTime, errorhandler_middleware_1.wrapAsync(aircraft_controller_1.deleteAllAircrafts));
//# sourceMappingURL=aircraft.router.js.map