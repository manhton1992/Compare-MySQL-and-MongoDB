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
const mySqlConnection = require('../../helpers/mysql_db');

/** Methodes */

/**
 * Get all position
 * @param req 
 * @param res 
 */
export const getPositions = async(req: Request, res: Response) => {
    mySqlConnection.query('SELECT * from positions', function(err: { message: any; }, rows: any, fields: any) {
        if (!err){
            sendSuccess(res, rows);
        }else {
            sendBadRequest(res, err.message);
        }
      });
};
/**
 * @description Create a new position
 * @param req 
 * @param res 
 */
export const createPosition = async (req: Request, res: Response) => {
    var lon = req.body.lon;
    var lat = req.body.lat;
    var aircraftId = req.body.aircraftId;
    var sendTime = req.body.sendTime;
    var query = "INSERT INTO positions (lon, lat, aircraftId, sendTime) VALUES ('" + lon + "', '" + lat + "', '" 
                                        + aircraftId + "', '" + sendTime + "')";
    mySqlConnection.query(query, (err: { message: any; }, results: { insertId: string; }, fields: any) => {
        if(!err){
            sendCreated(res, "Inserted position id: " + results.insertId);
        }else{
            sendBadRequest(res, err.message);
        }
    });
};

/**
 * @description get single Positon
 * @param req 
 * @param res 
 */
export const getSinglePosition = async(req: Request, res : Response) => {
    console.log(req.params.positionId);
    mySqlConnection.query('SELECT * FROM positions WHERE positions.id = ?', [req.params.positionId], (err: { message: any; }, rows: any, fields: any) => {
        if(! err){
            sendSuccess(res, rows);
        }else{
            sendBadRequest(res, err.message);
        }
    });
    
};

/**
 * @description delete position
 * @param req 
 * @param res 
 */
export const deletePositon = async(req: Request, res: Response) => {
    mySqlConnection.query("DELETE FROM positions WHERE id = ?", [req.params.positionId], (err: { message: any; }, results: any, fields: any) => {
        if(! err){
            sendDeleteSuccess(res, "OK");
        }else{
            sendBadRequest(res, err.message);
        }
    });
};
    
/**
 * @description Update position
 * @param req 
 * @param res 
 */
export const updatePosition = async(req: Request, res: Response) => {
    
    var id = req.params.positionId;
    var lon = req.body.lon;
    var lat = req.body.lat;
    var aircraftId = req.body.aircraftId;
    var sendTime = req.body.sendTime;
    var query = "UPDATE positions SET lon = ? , lat = ? , aircraftId = ?, sendTime = ? WHERE id = ?";
    mySqlConnection.query(query, [lon, lat, aircraftId, sendTime, id], (err: { message: any; }, results: { id: string; }, fields: any) => {
        if(!err){
            updateSuccess(res, "updated: " + results.id);
        }else{
            sendBadRequest(res, err.message);
        }
    });
};

/**
 * @description Update aircraftId for all positions
 * @param req 
 * @param res 
 */
 export const updateAircraftIdForPositions = async(req: Request, res: Response) => {
   
    var lon = req.body.lon;
    var lat = req.body.lat;
    var aircraftId = req.body.aircraftId;
    var sendTime = req.body.sendTime;
    var query = "UPDATE positions SET lon = ? , lat = ? , aircraftId = ?, sendTime = ? WHERE aircraftId = ?";
    mySqlConnection.query(query, [lon, lat, aircraftId, sendTime, aircraftId], (err: { message: any; }, results: { id: string; }, fields: any) => {
        if(!err){
            updateSuccess(res, "updated: ");
        }else{
            sendBadRequest(res, err.message);
        }
    });
};

/**
 * @description find positions with aircraftId
 */
export const findAllPositionWithAircraftId = async(req: Request, res: Response) => {

    var query = "SELECT * FROM position WHERE positon.aircraftId = ?";
    mySqlConnection.query(query, [req.params.aircraftId], (err: any, rows: any, fields: any) => {
        if(!err){
            updateSuccess(res, rows);
        }else{
            sendBadRequest(res, err.message);
        }
    });
}

/**
 * @description delete all positons
 */

export const deleteAllPositons = async(req: Request, res: Response) => {
    var query = "DELETE FROM positions WHERE true";
    mySqlConnection.query(query, (err: any, results: any, fields: any) => {
        if(!err){
            updateSuccess(res, "OK");
        }else{
            sendBadRequest(res, err.message);
        }
    });
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
                [
                    req.body.lon,
                    req.body.lat,
                    req.body.aircraftId,
                    req.body.sendTime
                ]
            )
        }
        console.log(docs);
        var query = "INSERT INTO positions (lon, lat, aircraftId, sendTime) VALUES ? ";
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
