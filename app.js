const mysql = require("mysql");
const express = require("express");
const app = express();

const connection = mysql.createConnection({
	host: "localhost",
	user: "sarang",
	password: "Sarang@1234",
	database: "Trial",
});
connection.connect((err) => {
	if (err) {
		console.log(err);
	}
	else {
		console.log("Database Connected");
	}
});
var insertQuery = 'insert into `Try` (`Name`,`Age`,`Roll`,`Address`) VALUES(?,?,?,?)'
var getQuery = 'select * from `Try`'
connection.query(getQuery, ((err, result) => {
	console.log(result);
}))
// var query = mysql.format(insertQuery, ["sarang", 21, 1288, "adi"]);
// connection.query(query, ((err, res) => {
// 	if (err) {
// 		console.log(err);
// 	}
// 	else {
// 		console.log(res);
// 	}
// })
// )