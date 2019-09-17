"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const argon2 = require("argon2");
const crypto_1 = require("crypto");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const user_1 = require("../models/user");
const envConfig = dotenv.config();
class AuthServie {
    constructor() { }
    async Login(email, password) {
        const userRecord = await user_1.default.findOne({ email });
        if (!userRecord) {
            throw new Error('User not found');
        }
        else {
            const correctPassword = await argon2.verify(userRecord.password, password);
            if (!correctPassword) {
                throw new Error('Incorrect password');
            }
        }
        return {
            user: {
                email: userRecord.email,
                name: userRecord.name,
            },
            token: this.generateJWT(userRecord),
        };
    }
    async LoginAs(email) {
        const userRecord = await user_1.default.findOne({ email });
        console.log('Finding user record...');
        if (!userRecord) {
            throw new Error('User not found');
        }
        return {
            user: {
                email: userRecord.email,
                name: userRecord.name,
            },
            token: this.generateJWT(userRecord),
        };
    }
    async SignUp(email, password, name) {
        const salt = crypto_1.randomBytes(32);
        const passwordHashed = await argon2.hash(password, { salt });
        const userRecord = await user_1.default.create({
            password: passwordHashed,
            email,
            salt: salt.toString('hex'),
            name,
        });
        const token = this.generateJWT(userRecord);
        return {
            user: {
                email: userRecord.email,
                name: userRecord.name,
            },
            token,
        };
    }
    generateJWT(user) {
        return jwt.sign({
            data: {
                _id: user._id,
                name: user.name,
                email: user.email
            }
        }, envConfig.JWT_SECRET, { expiresIn: '6h' });
    }
}
exports.default = AuthServie;
//# sourceMappingURL=auth.js.map