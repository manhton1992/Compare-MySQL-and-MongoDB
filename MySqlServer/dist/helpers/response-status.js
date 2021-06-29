"use strict";
/**
 * Helper functions for send response status
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSuccess = exports.sendDeleteSuccess = exports.sendInternalError = exports.sendNotFound = exports.sendUnprocessable = exports.sendBadRequest = exports.sendCreated = exports.sendSuccess = void 0;
/**
 * @Description 200 Ok
 * @param {Response} res
 * @param {*} data
 * @param {String} [message]
 */
exports.sendSuccess = (res, data, message) => {
    res.status(200).send({
        data: {
            status: "success",
            message: message,
            data: data,
        },
    });
};
/**
 * @Description 201 CREADTED
 * @param res
 * @param data
 */
exports.sendCreated = (res, data) => {
    res.status(201).send({
        data: {
            status: 'success',
            data: data,
        }
    });
};
/**
 * @description 400 BAD REQUEST
 * @param res
 * @param message
 */
exports.sendBadRequest = (res, message) => {
    res.status(400).send({
        data: {
            status: 'error',
            message: message,
        }
    });
};
/**
 * @description 422 UNPROCESSABLE ENTITY
 * @param res
 * @param message
 */
exports.sendUnprocessable = (res, message) => {
    res.status(422).send({
        data: {
            status: 'error',
            message: message,
        }
    });
};
/**
 *
 * @param res @description 404 NOR FOUND
 * @param message
 */
exports.sendNotFound = (res, message) => {
    res.status(404).send({
        data: {
            status: 'error',
            message: message,
        },
    });
};
exports.sendInternalError = (res, message) => {
    res.status(500).send({
        data: {
            status: 'error',
            message: message,
        },
    });
};
/**
 *
 * @param res
 * @param data
 */
exports.sendDeleteSuccess = (res, data) => {
    res.status(201).send({
        data: {
            status: 'delete success',
            data: data,
        },
    });
};
/**
 *
 */
exports.updateSuccess = (res, data) => {
    res.status(201).send({
        data: {
            status: 'update success',
            data: data,
        },
    });
};
//# sourceMappingURL=response-status.js.map