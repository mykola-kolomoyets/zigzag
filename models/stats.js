"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var StatsSchema = new mongoose_1.default.Schema({
    id: {
        type: String,
        required: [true, 'required field'],
        trim: true
    },
    totalGames: { type: Number, required: false },
    moves: { type: Number, required: false },
    bestGame: new mongoose_1.default.Schema({
        time: { type: Number, required: false },
        field: new mongoose_1.default.Schema({
            width: { type: Number, required: false },
            height: { type: Number, required: false },
        })
    })
});
exports.default = mongoose_1.default.model('Stats', StatsSchema);
