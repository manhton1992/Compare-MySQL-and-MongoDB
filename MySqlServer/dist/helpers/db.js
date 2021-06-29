"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db_connect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { MONGO_INITDB_USERNAME, MONGO_INITDB_PASSWORD, MONGO_INITDB_PORT, MONGO_INITDB_DATABASE } = process.env;
const MONGO_HOSTNAME = 'localhost';
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
const url = `mongodb://${MONGO_HOSTNAME}:${MONGO_INITDB_PORT}/${MONGO_INITDB_DATABASE}?authSource=admin`;
exports.db_connect = mongoose_1.default.connect(url, options).then(function () {
    console.log('MongoDB is connected');
})
    .catch(function (err) {
    console.log(err);
});
//# sourceMappingURL=db.js.map