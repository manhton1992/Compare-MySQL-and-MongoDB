/** Pakage imports */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAllAircrafts = exports.getAirCraftsWithAllPosition = exports.updateAircraft = exports.deleteAircraft = exports.getSingleAircraft = exports.createAirCrafts = exports.createAirCraft = exports.getAirCrafts = void 0;
const response_status_1 = require("../../helpers/response-status");
const mySqlConnection = require('../../helpers/mysql_db');
/** Methodes */
/** variable */
/**
 * Get all aricrafts
 * @param req
 * @param res
 */
exports.getAirCrafts = async (req, res) => {
    mySqlConnection.query('SELECT * from aircrafts', function (err, rows, fields) {
        if (!err) {
            response_status_1.sendSuccess(res, rows);
        }
        else {
            response_status_1.sendBadRequest(res, err.message);
        }
    });
};
/**
 * @description Create a New aircraft
 * @param req
 * @param res
 */
exports.createAirCraft = async (req, res) => {
    const name = req.body.name;
    const title = req.body.title;
    var query = "INSERT INTO aircrafts (name, title) VALUES ('" + name + "', '" + title + "')";
    mySqlConnection.query(query, (err, results, fields) => {
        if (!err) {
            response_status_1.sendCreated(res, results.insertId);
        }
        else {
            response_status_1.sendBadRequest(res, err.message);
        }
    });
};
/**
 * @description add aircraft by number of aircrafts
 * @param req
 * @param res
 */
exports.createAirCrafts = async (req, res) => {
    try {
        let number = parseInt(req.params.number);
        // create an array of documents to insert
        const docs = [];
        for (let i = 0; i < number; i++) {
            docs.push([
                req.body.name,
                req.body.title
            ]);
        }
        var query = "INSERT INTO aircrafts (name, title) VALUES ? ";
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
/**
 * @description get single aircraft
 * @param req
 * @param res
 */
exports.getSingleAircraft = async (req, res) => {
    mySqlConnection.query('SELECT * FROM aircrafts WHERE aircrafts.id = ?', [req.params.aircraftId], (err, rows, fields) => {
        if (!err) {
            response_status_1.sendSuccess(res, rows);
        }
        else {
            response_status_1.sendBadRequest(res, err.message);
        }
    });
};
/**
 * @description delete aircraft
 * @param req
 * @param res
 */
exports.deleteAircraft = async (req, res) => {
    mySqlConnection.query("DELETE FROM aircrafts WHERE id = ?", [req.params.aircraftId], (err, results, fields) => {
        if (!err) {
            response_status_1.sendDeleteSuccess(res, "OK");
        }
        else {
            response_status_1.sendBadRequest(res, err.message);
        }
    });
};
/**
 * @description Update Aircraft
 * @param req
 * @param res
 */
exports.updateAircraft = async (req, res) => {
    var id = req.params.aircraftId;
    var name = req.body.name;
    var title = req.body.title;
    var query = "UPDATE aircrafts SET name = ? , title = ? WHERE id = ?";
    mySqlConnection.query(query, [name, title, id], (err, results, fields) => {
        if (!err) {
            response_status_1.updateSuccess(res, "OK");
        }
        else {
            response_status_1.sendBadRequest(res, err.message);
        }
    });
};
/**
 * @description get positons with AircraftId
 */
exports.getAirCraftsWithAllPosition = async (req, res) => {
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
 * @description delete all aircraft
 * @req
 * @res
 */
exports.deleteAllAircrafts = async (req, res) => {
    var query = "DELETE FROM aircrafts WHERE true";
    mySqlConnection.query(query, (err, results, fields) => {
        if (!err) {
            response_status_1.updateSuccess(res, "OK");
        }
        else {
            response_status_1.sendBadRequest(res, err.message);
        }
    });
};
//# sourceMappingURL=aircraft.controller.js.map