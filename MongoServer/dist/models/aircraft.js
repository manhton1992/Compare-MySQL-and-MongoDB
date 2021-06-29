"use strict";
/**
 * aircraft model
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.aircraftModel = exports.aircraftSchema = void 0;
/**
 * package imports
 */
const mongoose_1 = require("mongoose");
exports.aircraftSchema = new mongoose_1.Schema({
    name: {
        type: String,
        default: "Viet Nam Airline",
        required: true,
    },
    title: {
        type: String,
        required: false,
        default: 'Boeing',
    }
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    }
});
exports.aircraftModel = mongoose_1.model('Aircraft', exports.aircraftSchema);
//# sourceMappingURL=aircraft.js.map