/**
 * Middleware for time logger
 */

 import {Request, Response, NextFunction} from 'express';

 export const logTime = (req: Request, res: Response, next: NextFunction) => {
    if (process.env.NODE_ENV != 'test') {
		console.log('Log:', new Date().toLocaleString());
	}
	next();
 };