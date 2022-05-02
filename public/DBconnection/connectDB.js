"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
class connectDB {
    constructor() {
        this.createconnection();
    }
    createconnection() {
        try {
            this.connection = mysql_1.default.createConnection({
                host: process.env.HOST,
                user: process.env.USER,
                password: process.env.PASSWORD,
                database: process.env.DATABASE,
            });
            this.connection.connect((err) => {
                if (!err) {
                    console.log("Database Connected.....");
                }
                else {
                    console.log(err);
                }
            });
        }
        catch (error) {
            console.log("Error in database Connection....");
        }
    }
}
exports.default = new connectDB().connection;
