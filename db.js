const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("./sailors_database.db", (err) => {
    if (err) {
      console.error("Error opening database " + err.message);
    } else {
      db.run(
        "CREATE TABLE sailors( \
              SID INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,\
              SNAME NVARCHAR(30)  NOT NULL,\
              RATING NINTEGER  NOT NULL,\
              AGE NINTEGER\
          )",
        (err) => {
          if (err) {
            console.log("Table already exists.");
          }
        }
      );
    }
  });

module.exports = db