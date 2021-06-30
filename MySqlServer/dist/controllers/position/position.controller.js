"use strict";
/** Pakage imports */
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPositions = exports.deleteAllPositons = exports.findAllPositionWithAircraftId = exports.updateAircraftIdForPositions = exports.updatePosition = exports.deletePositon = exports.getSinglePosition = exports.createPosition = exports.getPositions = void 0;
const response_status_1 = require("../../helpers/response-status");
const mySqlConnection = require('../../helpers/mysql_db');
/** Methodes */
/**
 * Get all position
 * @param req
 * @param res
 */
exports.getPositions = async (req, res) => {
    mySqlConnection.query('SELECT * from positions', function (err, rows, fields) {
        if (!err) {
            response_status_1.sendSuccess(res, rows);
        }
        else {
            response_status_1.sendBadRequest(res, err.message);
        }
    });
};
/**
 * @description Create a new position
 * @param req
 * @param res
 */
exports.createPosition = async (req, res) => {
    var lon = req.body.lon;
    var lat = req.body.lat;
    var aircraftId = req.body.aircraftId;
    var sendTime = req.body.sendTime;
    var query = "INSERT INTO positions (lon, lat, aircraftId, sendTime) VALUES ('" + lon + "', '" + lat + "', '"
        + aircraftId + "', '" + sendTime + "')";
    mySqlConnection.query(query, (err, results, fields) => {
        if (!err) {
            response_status_1.sendCreated(res, "Inserted position id: " + results.insertId);
        }
        else {
            response_status_1.sendBadRequest(res, err.message);
        }
    });
};
/**
 * @description get single Positon
 * @param req
 * @param res
 */
exports.getSinglePosition = async (req, res) => {
    console.log(req.params.positionId);
    mySqlConnection.query('SELECT * FROM positions WHERE positions.id = ?', [req.params.positionId], (err, rows, fields) => {
        if (!err) {
            response_status_1.sendSuccess(res, rows);
        }
        else {
            response_status_1.sendBadRequest(res, err.message);
        }
    });
};
/**
 * @description delete position
 * @param req
 * @param res
 */
exports.deletePositon = async (req, res) => {
    mySqlConnection.query("DELETE FROM positions WHERE id = ?", [req.params.positionId], (err, results, fields) => {
        if (!err) {
            response_status_1.sendDeleteSuccess(res, "OK");
        }
        else {
            response_status_1.sendBadRequest(res, err.message);
        }
    });
};
/**
 * @description Update position
 * @param req
 * @param res
 */
exports.updatePosition = async (req, res) => {
    var id = req.params.positionId;
    var lon = req.body.lon;
    var lat = req.body.lat;
    var aircraftId = req.body.aircraftId;
    var sendTime = req.body.sendTime;
    var query = "UPDATE positions SET lon = ? , lat = ? , aircraftId = ?, sendTime = ? WHERE id = ?";
    mySqlConnection.query(query, [lon, lat, aircraftId, sendTime, id], (err, results, fields) => {
        if (!err) {
            response_status_1.updateSuccess(res, "updated: " + results.id);
        }
        else {
            response_status_1.sendBadRequest(res, err.message);
        }
    });
};
/**
 * @description Update aircraftId for all positions
 * @param req
 * @param res
 */
exports.updateAircraftIdForPositions = async (req, res) => {
    var lon = req.body.lon;
    var lat = req.body.lat;
    var aircraftId = req.body.aircraftId;
    var sendTime = req.body.sendTime;
    var query = "UPDATE positions SET lon = ? , lat = ? , aircraftId = ?, sendTime = ? WHERE aircraftId = ?";
    mySqlConnection.query(query, [lon, lat, aircraftId, sendTime, aircraftId], (err, results, fields) => {
        if (!err) {
            response_status_1.updateSuccess(res, "updated: ");
        }
        else {
            response_status_1.sendBadRequest(res, err.message);
        }
    });
};
/**
 * @description find positions with aircraftId
 */
exports.findAllPositionWithAircraftId = async (req, res) => {
    var query = "SELECT * FROM position WHERE positon.aircraftId = ?";
    mySqlConnection.query(query, [req.params.aircraftId], (err, rows, fields) => {
        if (!err) {
            response_status_1.updateSuccess(res, rows);
        }
        else {
            response_status_1.sendBadRequest(res, err.message);
        }
    });
};
/**
 * @description delete all positons
 */
exports.deleteAllPositons = async (req, res) => {
    var query = "DELETE FROM positions WHERE true";
    mySqlConnection.query(query, (err, results, fields) => {
        if (!err) {
            response_status_1.updateSuccess(res, "OK");
        }
        else {
            response_status_1.sendBadRequest(res, err.message);
        }
    });
};
/**
 * @description add positions
 * @param req
 * @param res
 */
exports.createPositions = async (req, res) => {
    try {
        let number = parseInt(req.params.number);
        // create an array of documents to insert
        const docs = [];
        for (let i = 0; i < number; i++) {
            docs.push([
                req.body.lon,
                req.body.lat,
                req.body.aircraftId,
                req.body.sendTime
            ]);
        }
        console.log(docs);
        var query = "INSERT INTO positions (lon, lat, aircraftId, sendTime) VALUES ? ";
        mySqlConnection.query(query, [docs], (err, results, fields) => {
            if (!err) {
                response_status_1.sendCreated(res, "OK");
            }
            else {
                response_status_1.sendBadRequest(res, err.message);
            }
        });
    }
    catch (error) {
        response_status_1.sendBadRequest(res, error.message);
    }
};
//# sourceMappingURL=position.controller.js.map