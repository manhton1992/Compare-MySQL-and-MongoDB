/** Pakage imports */

import {Request, Response} from 'express';
import {IAirCraftModel, aircraftModel} from '../../models/aircraft';
import requestPromise = require('request-promise');
import request = require('request');
import mongoose from 'mongoose';
import config from 'config';
import {
    sendSuccess,
    sendBadRequest,
    sendCreated,
    sendUnprocessable,
    sendDeleteSuccess,
    updateSuccess,
} from '../../helpers/response-status'
import { IPositionModel, positionModel } from '../../models/position';
//import { findAllPositionWithAircraftId } from '../position/position.controller';


/** Methodes */

/** variable */

/**
 * Get all aricrafts
 * @param req 
 * @param res 
 */
export const getAirCrafts = async(req: Request, res: Response) => {
    try {
        const aircrafts: IAirCraftModel[] = await aircraftModel.find(req.query);
        sendSuccess(res, aircrafts);
    } catch (error) {
        sendBadRequest(res, error.message);
    }
};

/**
 * @description Create a New aircraft
 * @param req 
 * @param res 
 */
export const createAirCraft = async (req: Request, res: Response) => {
    try {
        const newAirCraft: IAirCraftModel = await aircraftModel.create(req.body);
        sendCreated(res, newAirCraft);
  
    } catch (error) {
        sendBadRequest(res, error.message);
    }
};

/**
 * @description get single aircraft
 * @param req 
 * @param res 
 */
export const getSingleAircraft = async(req: Request, res : Response) => {
    try {
        const singleAircraft: IAirCraftModel | null = await aircraftModel.findById(req.params.aircraftid);
        sendSuccess(res, singleAircraft);
    } catch (error) {
        sendBadRequest(res, error.message);
    }
};

/**
 * @description delete aircraft
 * @param req 
 * @param res 
 */
export const deleteAircraft = async(req: Request, res: Response) => {
    try {
        const deleteAircraft: IAirCraftModel | null = await aircraftModel.findByIdAndDelete(req.params.aircraftid);
        sendDeleteSuccess(res, deleteAircraft);
    } catch (error) {
        sendBadRequest(res, error.message);
    }
};

/**
 * @description Update Aircraft
 * @param req 
 * @param res 
 */
export const updateAircraft = async(req: Request, res: Response) => {
    try {
        const updateAircraft: IAirCraftModel | null = await aircraftModel.findByIdAndUpdate(req.params.aircraftid, req.body, {new : true,});
        updateSuccess(res, updateAircraft);
    } catch (error) {
        sendBadRequest(res, error.message);
    }
};

/**
 * 
 */
export const getAirCraftsWithAllPosition = async(req: Request, res: Response) =>{
    try {
        const singleAircraft: IAirCraftModel | null = await aircraftModel.findById(req.params.aircraftid);
        const positons: IPositionModel[] = await positionModel.find({aircraftId:{ $eq :singleAircraft?._id}});
        sendSuccess(res, positons);
    } catch (error) {
        sendBadRequest(res, error.message);
    }
};

/**
 * 
 */
export const setAirCraftIDForAllPosition = async(req: Request, res: Response) =>{
    try {
        const singleAircraft: IAirCraftModel | null = await aircraftModel.findById(req.params.aircraftid);
        const positons: IPositionModel[] = await positionModel.find({aircraftId:{ $eq :singleAircraft?._id}},
            {$set: {aircraftId: "5ec8095763a879e88a3c6ff6"}});
        sendSuccess(res, positons);
    } catch (error) {
        sendBadRequest(res, error.message);
    }
};
