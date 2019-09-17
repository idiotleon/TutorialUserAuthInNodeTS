"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../models/user");
exports.default = async (req, res, next) => {
    try {
        const decodeUser = req.token.data;
        const user = await user_1.default.findOne({ _id: decodeUser._id });
        if (!user) {
            res.status(401).end();
        }
        req.currentUser = user;
        return next();
    }
    catch (e) {
        return res.json(e).status(500);
    }
};
//# sourceMappingURL=attachCurrentUser.js.map