var express = require("express");
var mysql = require("mysql");

var app = express();
var PORT = process.env.PORT || 8080;

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Love.0980",
    database: "burgers_db"
});

connection.connect(function (err) {
    if (err) {
        console.log("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId)
});

//unclear how to set up routes
app.get("/", function (req, res) {

    // If the main route is hit, then we initiate a SQL query to grab all records.
    // All of the resulting records are stored in the variable "result."
    connection.query("SELECT * FROM schools", function (err, result) {
        if (err) throw err;
        // We then begin building out HTML elements for the page.
        var html = "<h1> Magical Schools </h1>";

        // Here we begin an unordered list.
        html += "<ul>";

        // We then use the retrieved records from the database to populate our HTML file.
        for (var i = 0; i < result.length; i++) {
            html += "<li><p> ID: " + result[i].id + "</p>";
            html += "<p>School: " + result[i].name + " </p></li>";
        }

        // We close our unordered list.
        html += "</ul>";

        // Finally we send the user the HTML file we dynamically created.
        res.send(html);
    });
});

app.listen(PORT, function () {
    console.log("server listeing on: http://localhost:" + PORT);
});