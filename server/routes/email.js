"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var email_1 = __importDefault(require("./../controllers/email"));
var router = (0, express_1.Router)();
router.route('/').post(email_1.default.notifyByEmail);
exports.default = router;
