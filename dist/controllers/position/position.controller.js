"use strict";
/** Pakage imports */
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAllPositionWithAircraftId = exports.updatePosition = exports.deletePositon = exports.getSinglePosition = exports.createPosition = exports.getPositions = void 0;
const position_1 = require("../../models/position");
const response_status_1 = require("../../helpers/response-status");
/** Methodes */
/**
 * Get all position
 * @param req
 * @param res
 */
exports.getPositions = async (req, res) => {
    try {
        const positons = await position_1.positionModel.find(req.query);
        response_status_1.sendSuccess(res, positons);
    }
    catch (error) {
        response_status_1.sendBadRequest(res, error.message);
    }
};
/**
 * @description Create a new position
 * @param req
 * @param res
 */
exports.createPosition = async (req, res) => {
    try {
        const newPosition = await position_1.positionModel.create(req.body);
        response_status_1.sendCreated(res, newPosition);
    }
    catch (error) {
        response_status_1.sendBadRequest(res, error.message);
    }
};
/**
 * @description get single Positon
 * @param req
 * @param res
 */
exports.getSinglePosition = async (req, res) => {
    try {
        const singlePosition = await position_1.positionModel.findById(req.params.positionid);
        response_status_1.sendSuccess(res, singlePosition);
    }
    catch (error) {
        response_status_1.sendBadRequest(res, error.message);
    }
};
/**
 * @description delete position
 * @param req
 * @param res
 */
exports.deletePositon = async (req, res) => {
    try {
        const deleteposition = await position_1.positionModel.findByIdAndDelete(req.params.positionid);
        response_status_1.sendDeleteSuccess(res, deleteposition);
    }
    catch (error) {
        response_status_1.sendBadRequest(res, error.message);
    }
};
/**
 * @description Update position
 * @param req
 * @param res
 */
exports.updatePosition = async (req, res) => {
    try {
        const updatePosition = await position_1.positionModel.findByIdAndUpdate(req.params.positionid, req.body, { new: true, });
        response_status_1.updateSuccess(res, updatePosition);
    }
    catch (error) {
        response_status_1.sendBadRequest(res, error.message);
    }
};
/** */
exports.findAllPositionWithAircraftId = async (aircraftid) => {
    const positions = await position_1.positionModel.find();
    return positions;
};
//# sourceMappingURL=position.controller.js.map