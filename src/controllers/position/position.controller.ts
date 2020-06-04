/** Pakage imports */

import {Request, Response} from 'express';
import {IPositionModel, positionModel} from '../../models/position';
import requestPromise = require('request-promise');
import request = require('request');
import {
    sendSuccess,
    sendBadRequest,
    sendCreated,
    sendUnprocessable,
    sendDeleteSuccess,
    updateSuccess,
} from '../../helpers/response-status'

/** Methodes */

/**
 * Get all position
 * @param req 
 * @param res 
 */
export const getPositions = async(req: Request, res: Response) => {
    try {
        const positons: IPositionModel[] = await positionModel.find(req.query);
        sendSuccess(res, positons);
    } catch (error) {
        sendBadRequest(res, error.message);
    }
};
/**
 * @description Create a new position
 * @param req 
 * @param res 
 */
export const createPosition = async (req: Request, res: Response) => {
    try {
        const newPosition: IPositionModel = await positionModel.create(req.body);
        sendCreated(res, newPosition);
    } catch (error) {
        sendBadRequest(res, error.message);
    }
};

/**
 * @description get single Positon
 * @param req 
 * @param res 
 */
export const getSinglePosition = async(req: Request, res : Response) => {
    try {
        const singlePosition: IPositionModel | null = await positionModel.findById(req.params.positionid);
        sendSuccess(res, singlePosition);
    } catch (error) {
        sendBadRequest(res, error.message);
    }
};

/**
 * @description delete position
 * @param req 
 * @param res 
 */
export const deletePositon = async(req: Request, res: Response) => {
    try {
        const deleteposition: IPositionModel | null = await positionModel.findByIdAndDelete(req.params.positionid);
        sendDeleteSuccess(res, deleteposition);
    } catch (error) {
        sendBadRequest(res, error.message);
    }
};

/**
 * @description Update position
 * @param req 
 * @param res 
 */
export const updatePosition = async(req: Request, res: Response) => {
    try {
        const updatePosition: IPositionModel | null = await positionModel.findByIdAndUpdate(req.params.positionid, req.body, {new : true,});
        updateSuccess(res, updatePosition);
    } catch (error) {
        sendBadRequest(res, error.message);
    }
};

/** */
export const findAllPositionWithAircraftId = async(aircraftid: string) => {
    const positions = await positionModel.find();
    return positions;
}