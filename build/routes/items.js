"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const items_1 = require("../services/items");
const isAuth_1 = require("../middlewares/isAuth");
const attachCurrentUser_1 = require("../middlewares/attachCurrentUser");
exports.default = (app) => {
    app.get('/item/', isAuth_1.default, attachCurrentUser_1.default, async (req, res) => {
        try {
            const user = req.currentUser;
            const itemServiceInstance = new items_1.default();
            const items = await itemServiceInstance.GetMyItems(user);
            return res.json(items).status(200);
        }
        catch (e) {
            return res.json(e).status(500);
        }
    });
    app.get('/item/:id', isAuth_1.default, attachCurrentUser_1.default, async (req, res) => {
        try {
            const user = req.currentUser;
            const itemId = req.params.id;
            const itemServiceInstance = new items_1.default();
            const items = await itemServiceInstance.GetItem(itemId, user);
            return res.json(items).status(200);
        }
        catch (e) {
            return res.json(e).status(500);
        }
    });
    app.post('/item', isAuth_1.default, attachCurrentUser_1.default, async (req, res) => {
        try {
            const user = req.currentUser;
            const itemDTO = req.body.item;
            const itemServiceInstance = new items_1.default();
            const item = await itemServiceInstance.Create(itemDTO, user);
            return res.json(item).status(201);
        }
        catch (e) {
            return res.json(e).status(500);
        }
    });
    app.put('/item/:id', isAuth_1.default, attachCurrentUser_1.default, async (req, res) => {
        try {
            const user = req.currentUser;
            const itemDTO = req.body.item;
            const itemId = req.params.id;
            const itemServiceInstance = new items_1.default();
            const itemUpdated = await itemServiceInstance.Update(itemId, itemDTO, user);
            return res.json(itemUpdated).status(200);
        }
        catch (e) {
            return res.json(e).status(500);
        }
    });
    app.delete('/item/:id', isAuth_1.default, attachCurrentUser_1.default, async (req, res) => {
        try {
            const user = req.currentUser;
            const itemId = req.params.id;
            const itemServiceInstance = new items_1.default();
            await itemServiceInstance.Remove(itemId, user);
            return res.json('ok').status(200);
        }
        catch (e) {
            return res.json(e).status(500);
        }
    });
};
//# sourceMappingURL=items.js.map