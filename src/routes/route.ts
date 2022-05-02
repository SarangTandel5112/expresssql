import express from "express"
import curdop from "../controller/curdop";
const curd = new curdop();

class Routes {

    public router: express.Router;

    constructor() {
        this.router = express.Router();
        this.getdata();
    }

    private getdata() {
        this.router.route("/getdetails").post(curd.getdata);
        this.router.route("/adddata").post(curd.adddata);
    }
}

export default Routes;