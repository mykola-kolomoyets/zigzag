"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_status_codes_1 = require("http-status-codes");
var notFoundMiddleware = function (req, res) {
    res
        .status(http_status_codes_1.StatusCodes.NOT_FOUND)
        .send('Route doesn`t exist!');
};
exports.default = notFoundMiddleware;
