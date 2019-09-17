"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = require("../services/auth");
const isAuth_1 = require("../middlewares/isAuth");
const attachCurrentUser_1 = require("../middlewares/attachCurrentUser");
const checkRole_1 = require("../middlewares/checkRole");
exports.default = (app) => {
    app.post('/user/login', async (req, res) => {
        const email = req.body.user.email;
        const password = req.body.user.password;
        try {
            const authServiceInstance = new auth_1.default();
            const { user, token } = await authServiceInstance.Login(email, password);
            return res.status(200).json({ user, token }).end();
        }
        catch (e) {
            return res.json(e).status(500).end();
        }
    });
    app.post("/user/login-as", isAuth_1.default, attachCurrentUser_1.default, checkRole_1.default('admin'), async (req, res) => {
        try {
            const email = req.body.user.email;
            const authServiceInstance = new auth_1.default();
            const { user, token } = await authServiceInstance.LoginAs(email);
            return res.status(200).join({ user, token }).end();
        }
        catch (e) {
            console.log('Error in login as user: ', e);
            return res.json(e).status(500).end();
        }
    });
    app.post("/user/signup", async (req, res) => {
        try {
            const { name, email, password } = req.body.user;
            const authServiceInstance = new auth_1.default();
            const { user, token } = await authServiceInstance.SignUp(email, password, name);
            return res.json({ user, token }).status(200).end();
        }
        catch (e) {
            return res.json(e).status(500).end();
        }
    });
};
//# sourceMappingURL=user.js.map