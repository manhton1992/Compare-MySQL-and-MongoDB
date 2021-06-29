"use strict";
/**
 * Middleware for error handler
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ignoreFavicon = exports.globalErrorHandler = exports.wrapAsync = void 0;
const response_status_1 = require("../helpers/response-status");
/**
 * Wrapper for the error handler
 * @param func
 */
exports.wrapAsync = (func) => {
    return function (req, res, next) {
        func(req, res, next).catch(next);
    };
};
/**
 * Global error handler
 * @param error
 * @param req
 * @param res
 * @param next
 */
exports.globalErrorHandler = (error, req, res, next) => {
    response_status_1.sendInternalError(res, error.message);
};
/**
 *
 * @param req
 * @param res
 * @param next
 */
exports.ignoreFavicon = (req, res, next) => {
    if (req.originalUrl === '/favicon.ico') {
        res.status(204).json({ nope: true });
    }
    else {
        next();
    }
};
//# sourceMappingURL=errorhandler.middleware.js.map