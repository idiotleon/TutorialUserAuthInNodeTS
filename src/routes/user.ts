import { resolve } from "dns";
import AuthServie from "../services/auth";

export default (app) => {
    app.post('/user/login', async (req, res) => {
        const email = req.body.user.email;
        const password = req.body.user.password;

        try {
            const authServiceInstance = new AuthServie();
            const { user, token } = await authServiceInstance.Login(email, password);
            return res.status(200).json({ user, token }).end();
        } catch (e) {
            return res.json(e).status(500).end();
        }
    })

    app.post("/user/login-as", async (req, res) => {
        try {
            const email = req.body.user.email;
            const authServiceInstance = new AuthServie();

        } catch (e) {
            console.log('Error in login as user: ', e);
            return res.json(e).status(500).end();
        }
    })

    app.post("/user/signup", async (req, res) => {
        try {

        } catch (e) {
            return res.json(e).status(500).end();
        }
    })
}