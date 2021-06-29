/**
 * Helper functions for send response status
 */

 import {Response} from 'express';

 /**
  * @Description 200 Ok 
  * @param {Response} res
  * @param {*} data
  * @param {String} [message]
  */
 export const sendSuccess = (res: Response, data: any, message?: string): void => {
    res.status(200).send({
        data: {
            status: "success",
            message: message,
            data: data,
        },
    });
 };

 /**
  * @Description 201 CREADTED
  * @param res 
  * @param data 
  */
 export const sendCreated = (res: Response, data: any): void => {
    res.status(201).send({
        data: {
            status: 'success',
            data: data,
        }
    });
 };

 /**
  * @description 400 BAD REQUEST
  * @param res
  * @param message 
  */
 export const sendBadRequest = (res: Response, message: String): void => {
    res.status(400).send({
        data: {
            status: 'error',
            message: message,
        }
    });
 };

 /**
  * @description 422 UNPROCESSABLE ENTITY
  * @param res 
  * @param message 
  */
 export const sendUnprocessable = (res: Response, message: string): void => {
    res.status(422).send({
        data: {
            status: 'error',
            message: message,
        }
    });
 };

 /**
  * 
  * @param res @description 404 NOR FOUND
  * @param message 
  */
 export const sendNotFound = (res: Response, message: string): void => {
    res.status(404).send({
		data: {
			status: 'error',
			message: message,
		},
	})

 };

export const sendInternalError = (res: Response, message: string): void => {
    res.status(500).send({
        data: {
			status: 'error',
			message: message,
		},

    });
};
/**
 * 
 * @param res 
 * @param data 
 */
export const sendDeleteSuccess = (res: Response, data: any): void => {
    res.status(201).send({
		data: {
			status: 'delete success',
			data: data,
		},
	})

 };
 /**
  * 
  */
 export const updateSuccess = (res: Response, data: any): void => {
    res.status(201).send({
		data: {
			status: 'update success',
			data: data,
		},
	})
 };
