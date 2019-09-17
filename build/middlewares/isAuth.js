"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("express-jwt");
const dotenv = require("dotenv");
const config = dotenv.config();
const getTokenFromHeader = (req) => {
    if (req.headers.authorization && req.authorization.split(' ')[0] === 'Bearer') {
        return req.headers.authorization.split(' ')[1];
    }
};
exports.default = jwt({
    secret: config.JWT_SECRET,
    userProperty: 'token',
    getToken: getTokenFromHeader,
});
//# sourceMappingURL=isAuth.js.map