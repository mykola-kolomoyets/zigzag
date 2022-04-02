"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var auth_1 = __importDefault(require("../controllers/auth"));
var constants_1 = __importDefault(require("./../constants"));
var router = (0, express_1.Router)();
router.route('/').get(auth_1.default.getUser);
router.route(constants_1.default.auth.register).post(auth_1.default.register);
router.route(constants_1.default.auth.login).post(auth_1.default.login);
router.route(constants_1.default.auth.update).patch(auth_1.default.update);
exports.default = router;
