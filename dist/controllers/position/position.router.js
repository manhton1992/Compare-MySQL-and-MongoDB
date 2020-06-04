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
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.positionRouter = void 0;
/** Pakage imports */
const express = __importStar(require("express"));
const timelogger_middleware_1 = require("../../middlewares/timelogger.middleware");
const errorhandler_middleware_1 = require("../../middlewares/errorhandler.middleware");
const position_controller_1 = require("./position.controller");
/** Variables */
exports.positionRouter = express.Router({ mergeParams: true });
/** Get all Aircrafts */
exports.positionRouter.get('/', timelogger_middleware_1.logTime, errorhandler_middleware_1.wrapAsync(position_controller_1.getPositions));
/** Get Single Aircraft */
exports.positionRouter.get('/:positionid', timelogger_middleware_1.logTime, errorhandler_middleware_1.wrapAsync(position_controller_1.getSinglePosition));
/** CREATE */
exports.positionRouter.post('/', timelogger_middleware_1.logTime, errorhandler_middleware_1.wrapAsync(position_controller_1.createPosition));
/** Update Aircraft */
exports.positionRouter.put('/update/:positionid', timelogger_middleware_1.logTime, errorhandler_middleware_1.wrapAsync(position_controller_1.updatePosition));
/** Delete Aircraft */
exports.positionRouter.delete('/delete/:positionid', timelogger_middleware_1.logTime, errorhandler_middleware_1.wrapAsync(position_controller_1.deletePositon));
//# sourceMappingURL=position.router.js.map