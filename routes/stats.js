"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var stats_1 = __importDefault(require("../controllers/stats"));
var router = (0, express_1.Router)();
router.route('/').get(stats_1.default.get);
router.route('/update').post(stats_1.default.update).get(stats_1.default.get);
exports.default = router;
