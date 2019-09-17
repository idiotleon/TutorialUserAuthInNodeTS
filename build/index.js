"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routes_1 = require("./routes");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
app.use(bodyParser.json());
app.use('/api', routes_1.default);
const PORT = 3777;
const DBName = "idiotleon-user-auth-nodets";
app.listen(PORT, async () => {
    console.log('Server ready!');
    const mongoConnection = await mongoose.connect(`mongodb://localhost/${DBName}`);
    console.log('Database ready!');
    console.log(`Listening on port ${PORT}`);
});
//# sourceMappingURL=index.js.map