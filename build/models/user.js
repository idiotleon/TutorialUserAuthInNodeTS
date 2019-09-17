"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
    salt: {
        type: String,
        required: true,
    },
    name: {
        type: String,
    },
    role: {
        type: String,
        default: 'user',
    },
});
exports.default = mongoose.model('User', UserSchema);
//# sourceMappingURL=user.js.map