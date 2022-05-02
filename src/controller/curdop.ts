import { Request, Response } from "express"
import connectDB from "../DBconnection/connectDB";
import getdata from "../query/getdata";
import insert from "../query/insert";
import update from "../query/update";
import mysql from "mysql";

const connection = connectDB;
const getdetails = new getdata();
const adddata = new insert();
const updatedata = new update();

class curdop {

    public adddata = async (req: Request, res: Response) => {
        try {
            if (connection) {
                const { name, age, roll, address } = req.body;
                var query = mysql.format(adddata.inserttry() as string, [name, age, roll, address]);
                connection.query(query, (err, data) => {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        res.json({ msg: "Data Added Successfully" });
                    }
                })
            }
        } catch (error) {
            console.log("Error while adding data");
        }
    }

    public getdata = async (req: Request, res: Response) => {
        try {
            if (connection) {
                connection?.query(getdetails.gettry() as string, (err, data) => {
                    if (!err) {
                        res.send(data)
                    }
                    else {
                        console.log(err);
                    }
                })
            }
        } catch (error) {
            console.log(error);
        }
    }

    public updatedata = async (req: Request, res: Response) => {
        let id: any = "21";
        let field = `age`;
        let value = `100`;
        var query = updatedata.updatefield(field, value, id) as string;
        console.log(query);
        connection?.query(query, (err, data) => {
            res.send(data)
            console.log(data);
        })
    }

}

export default curdop;