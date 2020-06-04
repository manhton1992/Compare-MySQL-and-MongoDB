"use strict";
/**
 * Position Model
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.positionModel = exports.positionSchema = void 0;
/**
 * pakage import
 */
const mongoose_1 = require("mongoose");
exports.positionSchema = new mongoose_1.Schema({
    lon: {
        type: Number,
        required: true,
        default: 0,
    },
    lat: {
        type: Number,
        required: true,
        default: 0,
    },
    aircraftId: {
        type: String,
        required: true,
    },
    sendTime: {
        type: Date,
        required: true,
        default: '2020-05-22T17:18:15.437Z',
    }
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    }
});
exports.positionModel = mongoose_1.model('Position', exports.positionSchema);
//# sourceMappingURL=position.js.map