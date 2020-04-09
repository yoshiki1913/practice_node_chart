const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(function(req, res, next) {
    // jsonによしなにパースしてくれるらしい
    bodyParser.json();
    // Cros許可定義
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// DBコネクション
let mysql = require('mysql');
let connection = mysql.createConnection({
    host: 'ホスト名',
    user: 'ユーザー名',
    password: 'パスワード',
    port: 'ポート番号（数値型）',
    database: 'データベース 名'
});

connection.connect();

// 一覧取得
app.get("/list", (req, res) => {
    // DBリクエスト
    connection.query('SELECT * from positives;', (err, rows, fields) => {
        if (err) throw err;
        res.send(rows);
    });
});

app.listen(3000, () => console.log("listening at port 3000"));