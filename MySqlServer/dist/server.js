"use strict";
/**
 * Landing file for NodeJs
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
/** Package imports  */
const express_1 = __importStar(require("express"));
const errorhandler_middleware_1 = require("./middlewares/errorhandler.middleware");
const config_1 = __importDefault(require("config"));
/** Module imports */
const router_1 = require("./controllers/router");
// Connect to MongoDb
//const db = require('./helpers/db');
// Connect to Mysql
const mysql_db = require('./helpers/mysql_db');
/**Variables */
var cors = require('cors');
exports.app = express_1.default();
exports.app.use(cors());
exports.app.use(express_1.json());
exports.app.use(express_1.urlencoded({ extended: true }));
var datetime = require('node-datetime');
exports.app.use('/api', router_1.globalRouter);
exports.app.use(errorhandler_middleware_1.globalErrorHandler);
exports.app.use(errorhandler_middleware_1.ignoreFavicon);
/** Start server */
exports.app.listen(process.env.PORT || config_1.default.get('server.port'), () => {
    console.log('Aircraft Mysql_Server is running ...on ' + config_1.default.get('server.port'));
});
//# sourceMappingURL=server.js.map