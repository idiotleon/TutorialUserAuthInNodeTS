import UserModel from '../models/user';

export default async (req, res, next) => {
    try {
        const decodeUser = req.token.data;
        const user = await UserModel.findOne({ _id: decodeUser._id });
        if (!user) {
            res.status(401).end();
        }
        req.currentUser = user;
        return next();
    } catch (e) {
        return res.json(e).status(500);
    }
}