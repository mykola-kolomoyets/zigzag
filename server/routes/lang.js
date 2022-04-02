"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var lang_1 = __importDefault(require("./../controllers/lang"));
var router = (0, express_1.Router)();
router.route('/').post(lang_1.default.switchLanguage);
exports.default = router;
