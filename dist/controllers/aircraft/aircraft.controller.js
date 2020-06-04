"use strict";
/** Pakage imports */
Object.defineProperty(exports, "__esModule", { value: true });
exports.setAirCraftIDForAllPosition = exports.getAirCraftsWithAllPosition = exports.updateAircraft = exports.deleteAircraft = exports.getSingleAircraft = exports.createAirCraft = exports.getAirCrafts = void 0;
const aircraft_1 = require("../../models/aircraft");
const response_status_1 = require("../../helpers/response-status");
const position_1 = require("../../models/position");
//import { findAllPositionWithAircraftId } from '../position/position.controller';
/** Methodes */
/** variable */
/**
 * Get all aricrafts
 * @param req
 * @param res
 */
exports.getAirCrafts = async (req, res) => {
    try {
        const aircrafts = await aircraft_1.aircraftModel.find(req.query);
        response_status_1.sendSuccess(res, aircrafts);
    }
    catch (error) {
        response_status_1.sendBadRequest(res, error.message);
    }
};
/**
 * @description Create a New aircraft
 * @param req
 * @param res
 */
exports.createAirCraft = async (req, res) => {
    try {
        const newAirCraft = await aircraft_1.aircraftModel.create(req.body);
        response_status_1.sendCreated(res, newAirCraft);
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
    try {
        const singleAircraft = await aircraft_1.aircraftModel.findById(req.params.aircraftid);
        response_status_1.sendSuccess(res, singleAircraft);
    }
    catch (error) {
        response_status_1.sendBadRequest(res, error.message);
    }
};
/**
 * @description delete aircraft
 * @param req
 * @param res
 */
exports.deleteAircraft = async (req, res) => {
    try {
        const deleteAircraft = await aircraft_1.aircraftModel.findByIdAndDelete(req.params.aircraftid);
        response_status_1.sendDeleteSuccess(res, deleteAircraft);
    }
    catch (error) {
        response_status_1.sendBadRequest(res, error.message);
    }
};
/**
 * @description Update Aircraft
 * @param req
 * @param res
 */
exports.updateAircraft = async (req, res) => {
    try {
        const updateAircraft = await aircraft_1.aircraftModel.findByIdAndUpdate(req.params.aircraftid, req.body, { new: true, });
        response_status_1.updateSuccess(res, updateAircraft);
    }
    catch (error) {
        response_status_1.sendBadRequest(res, error.message);
    }
};
/**
 *
 */
exports.getAirCraftsWithAllPosition = async (req, res) => {
    try {
        const singleAircraft = await aircraft_1.aircraftModel.findById(req.params.aircraftid);
        const positons = await position_1.positionModel.find({ aircraftId: { $eq: singleAircraft === null || singleAircraft === void 0 ? void 0 : singleAircraft._id } });
        response_status_1.sendSuccess(res, positons);
    }
    catch (error) {
        response_status_1.sendBadRequest(res, error.message);
    }
};
/**
 *
 */
exports.setAirCraftIDForAllPosition = async (req, res) => {
    try {
        const singleAircraft = await aircraft_1.aircraftModel.findById(req.params.aircraftid);
        const positons = await position_1.positionModel.find({ aircraftId: { $eq: singleAircraft === null || singleAircraft === void 0 ? void 0 : singleAircraft._id } }, { $set: { aircraftId: "5ec8095763a879e88a3c6ff6" } });
        response_status_1.sendSuccess(res, positons);
    }
    catch (error) {
        response_status_1.sendBadRequest(res, error.message);
    }
};
//# sourceMappingURL=aircraft.controller.js.map