"use strict";
/**
 * Pakage imports
 */
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
exports.globalRouter = void 0;
const express = __importStar(require("express"));
const aircraft_router_1 = require("./aircraft/aircraft.router");
const position_router_1 = require("./position/position.router");
exports.globalRouter = express.Router({ mergeParams: true });
/** /api/aircraft rounter */
exports.globalRouter.use('/aircrafts', aircraft_router_1.aircraftRouter);
exports.globalRouter.use('/positions', position_router_1.positionRouter);
//# sourceMappingURL=router.js.map