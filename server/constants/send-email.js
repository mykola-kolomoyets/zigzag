"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMail = exports.sendTo = exports.sender = void 0;
var nodemailer = require('nodemailer');
exports.sender = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: 'mykola.kolomoiets@gmail.com',
        pass: 'Nikolak05092001'
    }
});
var sendTo = function (text, field) { return ({
    from: 'mykola.kolomoiets@gmail.com',
    to: 'kolomoyets473@gmail.com',
    subject: 'ZIGZAG WINNER!!!',
    text: "".concat(text, ": ").concat(JSON.stringify(field))
}); };
exports.sendTo = sendTo;
var sendMail = function (text, field) {
    exports.sender.sendMail((0, exports.sendTo)(text, field), function () { });
};
exports.sendMail = sendMail;
