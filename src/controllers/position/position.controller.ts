/** Pakage imports */

import {IPositionModel, positionModel} from '../../models/position';
import {Request, Response} from 'express';
import {
    sendBadRequest,
    sendCreated,
    sendDeleteSuccess,
    sendSuccess,
    sendUnprocessable,
    updateSuccess,
} from '../../helpers/response-status'
import requestPromise = require('request-promise');
import request = require('request');

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

/**
 * @description Update positions
 * @param req 
 * @param res 
 */
 export const updateAircraftIdForPositions = async(req: Request, res: Response) => {
    try {
        const positions = await positionModel.updateMany(
            {aircraftId: req.body.oldAircraftId},
            {"$set": {aircraftId: req.body.newAircraftId}}
        );
        sendSuccess(res, positions);
    } catch (error) {
        sendBadRequest(res, error.message);
    }
};

/**
 * @description find positions with aircraftId
 */
export const findAllPositionWithAircraftId = async(req: Request, res: Response) => {

    try {
        const positions: IPositionModel[] | null = await positionModel.find(
            {aircraftId: req.params.aircraftId}
        );
        sendSuccess(res, positions);
    } catch (error) {
        sendBadRequest(res, error.message);
    }
}

/**
 * @description delete all positons
 */

export const deleteAllPositons = async(req: Request, res: Response) => {
    try {
        await positionModel.remove();
        sendDeleteSuccess(res, "OK");

    } catch (error) {
        sendBadRequest(res, error.message);
    }
}

/**
 * @description add positions
 * @param req
 * @param res 
 */
 export const createPositions = async (req: Request, res: Response) => {
    try {
        let number = parseInt(req.params.number);
        // create an array of documents to insert
        const docs = [];
        for(let i = 0; i < number; i++){
            docs.push(
                req.body
            )
        }
        // this option prevents additional documents from being inserted if one fails
        const options = { ordered: true };
        
        await positionModel.insertMany(docs, options);
        sendCreated(res, "CREATED Positions");
  
    } catch (error) {
        sendBadRequest(res, error.message);
    }
};