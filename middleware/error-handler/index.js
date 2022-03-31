"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_status_codes_1 = require("http-status-codes");
var errorHandlerMiddleware = function (err, req, res, next) {
    console.log(err);
    res
        .status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR)
        .json({
        status: http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR,
        message: err.message
    });
};
exports.default = errorHandlerMiddleware;
