"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorhandler = void 0;
const errorhandler = (err, req, res, next) => {
    return res.send(err.message);
};
exports.errorhandler = errorhandler;
