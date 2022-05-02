"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const insert_1 = __importDefault(require("./query/insert"));
const getdata_1 = __importDefault(require("./query/getdata"));
const route_1 = __importDefault(require("./routes/route"));
const insertdata = new insert_1.default();
const getdetails = new getdata_1.default();
const router = new route_1.default().router;
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.connection();
        this.middleware();
        this.routes();
    }
    middleware() {
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
        this.app.use(express_1.default.static("public"));
    }
    routes() {
        this.app.use("/", router);
    }
    connection() {
        this.app.listen(process.env.PORT, () => {
            console.log(`Server Listining at port ${process.env.PORT}.....`);
        });
    }
}
exports.default = new App().app;
