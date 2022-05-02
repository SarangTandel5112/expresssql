import express from "express";
import "dotenv/config";
import connectDB from "./DBconnection/connectDB";
import insert from "./query/insert";
import getdata from "./query/getdata";
import Routes from "./routes/route";

const insertdata = new insert();
const getdetails = new getdata();
const router = new Routes().router;

class App {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.connection();
        this.middleware();
        this.routes();
    }

    private middleware(): void {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(express.static("public"));
    }

    private routes(): void {
        this.app.use("/", router)
    }

    private connection(): void {
        this.app.listen(process.env.PORT, () => {
            console.log(`Server Listining at port ${process.env.PORT}.....`);
        })
    }

}

export default new App().app;