import mysql from "mysql";

class connectDB {
    public connection: mysql.Connection | undefined;

    constructor() {
        this.createconnection()
    }

    public createconnection() {
        try {
            this.connection = mysql.createConnection({
                host: process.env.HOST,
                user: process.env.USER,
                password: process.env.PASSWORD,
                database: process.env.DATABASE,
            });
            this.connection.connect((err) => {
                if (!err) {
                    console.log("Database Connected.....");
                } else {
                    console.log(err)
                }
            });

        } catch (error) {
            console.log("Error in database Connection....");
        }
    }

}

export default new connectDB().connection;