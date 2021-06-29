/**
 * Middleware for error handler
 */

 /**
  * Pakage imports
  */
import {Request, Response, NextFunction} from 'express';
import {sendInternalError} from '../helpers/response-status';

/**
 * Wrapper for the error handler
 * @param func 
 */
export const wrapAsync = (func: Function) => {
    return function(req: Request, res: Response, next: NextFunction){
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
export const globalErrorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
    sendInternalError(res, error.message);
}
/**
 * 
 * @param req 
 * @param res 
 * @param next 
 */
export const  ignoreFavicon = (req: Request, res: Response, next: NextFunction) => {
    if (req.originalUrl === '/favicon.ico') {
      res.status(204).json({nope: true});
    } else {
      next();
    }
  }

