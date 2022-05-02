"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const curdop_1 = __importDefault(require("../controller/curdop"));
const curd = new curdop_1.default();
class Routes {
    constructor() {
        this.router = express_1.default.Router();
        this.getdata();
    }
    getdata() {
        this.router.route("/getdetails").post(curd.getdata);
        this.router.route("/adddata").post(curd.adddata);
    }
}
exports.default = Routes;
