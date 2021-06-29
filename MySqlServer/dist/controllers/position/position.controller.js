"use strict";
/** Pakage imports */
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPositions = exports.deleteAllPositons = exports.findAllPositionWithAircraftId = exports.updateAircraftIdForPositions = exports.updatePosition = exports.deletePositon = exports.getSinglePosition = exports.createPosition = exports.getPositions = void 0;
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
/**
 * @description Update aircraftId for all positions
 * @param req
 * @param res
 */
exports.updateAircraftIdForPositions = async (req, res) => {
    try {
        const positions = await position_1.positionModel.updateMany({ aircraftId: req.body.oldAircraftId }, { "$set": { aircraftId: req.body.newAircraftId } });
        response_status_1.sendSuccess(res, positions);
    }
    catch (error) {
        response_status_1.sendBadRequest(res, error.message);
    }
};
/**
 * @description find positions with aircraftId
 */
exports.findAllPositionWithAircraftId = async (req, res) => {
    try {
        const positions = await position_1.positionModel.find({ aircraftId: req.params.aircraftId });
        response_status_1.sendSuccess(res, positions);
    }
    catch (error) {
        response_status_1.sendBadRequest(res, error.message);
    }
};
/**
 * @description delete all positons
 */
exports.deleteAllPositons = async (req, res) => {
    try {
        await position_1.positionModel.remove();
        response_status_1.sendDeleteSuccess(res, "OK");
    }
    catch (error) {
        response_status_1.sendBadRequest(res, error.message);
    }
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
            docs.push(req.body);
        }
        // this option prevents additional documents from being inserted if one fails
        const options = { ordered: true };
        await position_1.positionModel.insertMany(docs, options);
        response_status_1.sendCreated(res, "CREATED Positions");
    }
    catch (error) {
        response_status_1.sendBadRequest(res, error.message);
    }
};
//# sourceMappingURL=position.controller.js.map