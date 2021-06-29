"use strict";
/**
 * Middleware for time logger
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.logTime = void 0;
exports.logTime = (req, res, next) => {
    if (process.env.NODE_ENV != 'test') {
        console.log('Log:', new Date().toLocaleString());
    }
    next();
};
//# sourceMappingURL=timelogger.middleware.js.map