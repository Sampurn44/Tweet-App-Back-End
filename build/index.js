"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// run "npm run dev" first then do further code
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = __importDefault(require("./routes/routes"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
dotenv_1.default.config();
//Define the routes
app.use("/api/v1", routes_1.default);
//Express Configuration
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.set("PORT", 3000);
app.set("BASE_URL", "localhost");
//MongDB connection
const mongodbURI = process.env.MONGO_DB_URI;
if (!mongodbURI) {
    console.error("Mongo URI not defined");
    process.exit(1);
}
mongoose_1.default.connect(mongodbURI, {}).then(() => {
    console.log("Mongoose connected");
}).catch(err => { console.log("Error connecting to Mongo"); });
//start the server
try {
    const port = app.get("PORT");
    const baseUrl = app.get("BASE_URL");
    server.listen(port, () => {
        console.log("listening");
    });
}
catch (error) {
    console.log(error);
}
exports.default = server;
