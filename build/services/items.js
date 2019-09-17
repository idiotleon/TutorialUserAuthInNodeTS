"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const items_1 = require("../models/items");
class ItemsService {
    constructor() { }
    async GetMyItems(user) {
        return items_1.default.find({ owner: user._id }).populate({ path: 'owner', select: '-password -salt' }).exec();
    }
    async GetItem(itemId, user) {
        return items_1.default.findOne({ _id: itemId, owner: user._id }).populate({ path: 'owner', select: '-password -salt' });
    }
    async Create(itemDTO, user) {
        const item = Object.assign(Object.assign({}, itemDTO), { owner: user._id });
        return items_1.default.create(item).populate({ path: 'owner', select: '-password -salt' });
    }
    async Update(itemId, itemDTO, user) {
        const item = Object.assign(Object.assign({}, itemDTO), { _id: itemId, owner: user._id });
        return items_1.default.findOneAndUpdate({ _id: itemId, owner: user._id }, item, { new: true }).populate({ path: 'owner', select: '-password -salt' });
    }
    async Remove(itemId, user) {
        return items_1.default.remove({ _id: itemId, owner: user._id }).exec();
    }
}
exports.default = ItemsService;
//# sourceMappingURL=items.js.map