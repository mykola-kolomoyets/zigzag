"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectionString = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
exports.connectionString = 'mongodb+srv://kolomoyets:Nikolak05092001@project-zigzag.ybvor.mongodb.net/zigzag?retryWrites=true&w=majority';
var connectDB = function (url) {
    if (!url)
        return mongoose_1.default.connect(exports.connectionString);
    return mongoose_1.default.connect(url);
};
exports.default = connectDB;
