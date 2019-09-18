import * as jwt from 'express-jwt';
import { config } from 'dotenv';
import { resolve } from 'path';

config({ path: resolve(__dirname, "../../.env") })

const getTokenFromHeader = (req) => {
    if (req.headers.authorization && req.authorization.split(' ')[0] === 'Bearer') {
        return req.headers.authorization.split(' ')[1];
    }
}

export default jwt({
    secret: process.env.JWT_SECRET,
    userProperty: 'token',
    getToken: getTokenFromHeader,
})