"use strict";
/**
 * Landing file for NodeJs
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
/** Package imports  */
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const config_1 = __importDefault(require("config"));
/** Module imports */
const router_1 = require("./controllers/router");
const errorhandler_middleware_1 = require("./middlewares/errorhandler.middleware");
/**Variables */
var cors = require('cors');
exports.app = express_1.default();
exports.app.use(cors());
exports.app.use(body_parser_1.default.json());
exports.app.use(body_parser_1.default.urlencoded({ extended: true }));
var datetime = require('node-datetime');
/** Setup Database */
mongoose_1.default.connect(config_1.default.get('database.host'), { useNewUrlParser: true });
/** */
/** Setup Mysql DB */
exports.app.use('/api', router_1.globalRouter);
exports.app.use(errorhandler_middleware_1.globalErrorHandler);
exports.app.use(errorhandler_middleware_1.ignoreFavicon);
/** Start server */
exports.app.listen(config_1.default.get('server.port'), () => {
    console.log('Aircraft Server is running...');
});
console.log(process.env.NODE_EVN);
//# sourceMappingURL=server.js.map