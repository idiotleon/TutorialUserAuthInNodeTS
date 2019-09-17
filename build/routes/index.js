"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./user");
const express = require("express");
const items_1 = require("./items");
const app = express();
user_1.default(app);
items_1.default(app);
exports.default = app;
//# sourceMappingURL=index.js.map