"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_status_codes_1 = require("http-status-codes");
var stats_1 = __importDefault(require("./../models/stats"));
var StatsController = /** @class */ (function () {
    function StatsController() {
    }
    var _a;
    _a = StatsController;
    StatsController.get = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var id, userStats;
        return __generator(_a, function (_b) {
            switch (_b.label) {
                case 0:
                    id = req.query.id;
                    return [4 /*yield*/, stats_1.default.findOne({ id: id })];
                case 1:
                    userStats = _b.sent();
                    res
                        .status(http_status_codes_1.StatusCodes.OK)
                        .json({
                        stats: userStats
                    });
                    return [2 /*return*/];
            }
        });
    }); };
    StatsController.update = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var _b, id, updateData, userStats, updatedStats;
        return __generator(_a, function (_c) {
            switch (_c.label) {
                case 0:
                    _b = req.body, id = _b.params.id, updateData = _b.data;
                    if (!id) {
                        res
                            .status(http_status_codes_1.StatusCodes.BAD_REQUEST)
                            .json({ message: 'Id was not provided' });
                    }
                    if (!updateData) {
                        res
                            .status(http_status_codes_1.StatusCodes.BAD_REQUEST)
                            .json({ message: 'Data was not provided' });
                    }
                    return [4 /*yield*/, stats_1.default.findOne({ id: id })];
                case 1:
                    userStats = _c.sent();
                    if (!userStats) {
                        res
                            .status(http_status_codes_1.StatusCodes.BAD_REQUEST)
                            .json({ message: 'User stats was not found by this ID' });
                    }
                    return [4 /*yield*/, stats_1.default.findOneAndUpdate({ id: id }, {
                            $set: __assign({ totalGames: userStats.get('totalGames') + 1 }, updateData)
                        })];
                case 2:
                    updatedStats = _c.sent();
                    res
                        .status(http_status_codes_1.StatusCodes.OK)
                        .json(updatedStats);
                    return [2 /*return*/];
            }
        });
    }); };
    return StatsController;
}());
exports.default = StatsController;
;
