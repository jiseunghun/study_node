var express = require("express");

var router = express.Router();

var pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "131519",
  database: "mysql",
});

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("test.html", { title: "Express" });
});

router.get("/db", (req, res, next) => {
  pool.getConnection(function (err, connection) {
    if (err) throw err; // not connected!

    // Use the connection
    connection.query(
      "SELECT * FROM help_keyword LIMIT 100;",
      function (error, results, fields) {
        res.send(JSON.stringify(results));
        console.log(results);
        // When done with the connection, release it.
        connection.release();

        // Handle error after the release.
        if (error) throw error;

        // Don't use the connection here, it has been returned to the pool.
      }
    );
  });
});

module.exports = router;
