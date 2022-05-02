"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connectDB_1 = __importDefault(require("../DBconnection/connectDB"));
const getdata_1 = __importDefault(require("../query/getdata"));
const insert_1 = __importDefault(require("../query/insert"));
const mysql_1 = __importDefault(require("mysql"));
const connection = connectDB_1.default;
const getdetails = new getdata_1.default();
const adddata = new insert_1.default();
class curdop {
    constructor() {
        this.adddata = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                if (connection) {
                    const { name, age, roll, address } = req.body;
                    var query = mysql_1.default.format(adddata.inserttry(), [name, age, roll, address]);
                    connection.query(query, (err, data) => {
                        if (err) {
                            console.log(err);
                        }
                        else {
                            res.json({ msg: "Data Added Successfully" });
                        }
                    });
                }
            }
            catch (error) {
                console.log("Error while adding data");
            }
        });
        this.getdata = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                if (connection) {
                    connection === null || connection === void 0 ? void 0 : connection.query(getdetails.gettry(), (err, data) => {
                        if (!err) {
                            res.send(data);
                        }
                        else {
                            console.log(err);
                        }
                    });
                }
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.default = curdop;
