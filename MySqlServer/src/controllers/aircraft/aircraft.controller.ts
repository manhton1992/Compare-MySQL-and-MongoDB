/** Pakage imports */
'use strict'

import {IAirCraftModel, aircraftModel} from '../../models/aircraft';
import { IPositionModel, positionModel } from '../../models/position';
import {Request, Response} from 'express';
import {
    sendBadRequest,
    sendCreated,
    sendDeleteSuccess,
    sendSuccess,
    sendUnprocessable,
    updateSuccess,
} from '../../helpers/response-status'

const mySqlConnection = require('../../helpers/mysql_db');

/** Methodes */

/** variable */

/**
 * Get all aricrafts
 * @param req 
 * @param res 
 */
export const getAirCrafts = async(req: Request, res: Response) => {
    mySqlConnection.query('SELECT * from aircrafts', function(err: { message: any; }, rows: any, fields: any) {
        if (!err){
            sendSuccess(res, rows);
        }
        else{
            sendBadRequest(res, err.message);
        }
    });
};

/**
 * @description Create a New aircraft
 * @param req 
 * @param res 
 */
export const createAirCraft = async (req: Request, res: Response) => {
    
    const name = req.body.name;
    const title = req.body.title;
 
    var query = "INSERT INTO aircrafts (name, title) VALUES ('" + name + "', '" + title + "')";
    mySqlConnection.query(query, (err: { message: any; }, results: { insertId: string }, fields: any) => {
        if(!err){
            sendCreated(res, results.insertId);
        }else{
            sendBadRequest(res, err.message);
        }
    });
};

/**
 * @description add aircraft by number of aircrafts
 * @param req
 * @param res 
 */
 export const createAirCrafts = async (req: Request, res: Response) => {
    try {
        let number = parseInt(req.params.number);
        // create an array of documents to insert
        const docs = [];
        for(let i = 0; i < number; i++){
            docs.push(
                [
                    req.body.name,
                    req.body.title
                ]
            )
        }
        
        var query = "INSERT INTO aircrafts (name, title) VALUES ? ";
        mySqlConnection.query(query, [docs], (err: { message: any; }, results: any, fields: any) => {
            if(!err){
                sendCreated(res, "OK");
            }else{
                sendBadRequest(res, err.message);
            }
        });
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
    mySqlConnection.query('SELECT * FROM aircrafts WHERE aircrafts.id = ?', [req.params.aircraftId], (err: { message: any; }, rows: any, fields: any) => {
        if(!err){
            sendSuccess(res, rows);
        }else{
            sendBadRequest(res, err.message);
        }
    });
};

/**
 * @description delete aircraft
 * @param req 
 * @param res 
 */
export const deleteAircraft = async(req: Request, res: Response) => {
    
    mySqlConnection.query("DELETE FROM aircrafts WHERE id = ?", [req.params.aircraftId], (err: { message: any; }, results: any, fields: any) => {
        if(! err){
            sendDeleteSuccess(res, "OK");
        }else{
            sendBadRequest(res, err.message);
        }
    });
};

/**
 * @description Update Aircraft
 * @param req 
 * @param res 
 */
export const updateAircraft = async(req: Request, res: Response) => {
    var id = req.params.aircraftId;
    var name = req.body.name;
    var title = req.body.title;
    
    var query = "UPDATE aircrafts SET name = ? , title = ? WHERE id = ?";
    mySqlConnection.query(query, [name, title, id], (err: any, results: {insertId: string}, fields: any) => {
        if(!err){
            updateSuccess(res, "OK");
        }else{
            sendBadRequest(res, err.message);
        }
    });
};

/**
 * @description get positons with AircraftId
 */
export const getAirCraftsWithAllPosition = async(req: Request, res: Response) =>{
    var query = "SELECT * FROM position WHERE positon.aircraftId = ?";
    mySqlConnection.query(query, [req.params.aircraftId], (err: any, rows: any, fields: any) => {
        if(!err){
            updateSuccess(res, rows);
        }else{
            sendBadRequest(res, err.message);
        }
    });
};

/**
 * @description delete all aircraft
 * @req
 * @res
 */
export const deleteAllAircrafts = async(req: Request, res: Response) => {
    
    var query = "DELETE FROM aircrafts WHERE true";
    mySqlConnection.query(query, (err: any, results: any, fields: any) => {
        if(!err){
            updateSuccess(res, "OK");
        }else{
            sendBadRequest(res, err.message);
        }
    });
}
