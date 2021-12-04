// Require better-sqlite3
const Database = require('better-sqlite3');

// Connect to a databse or create one if it doesn't exist yet. 
const db = new Database('history.db');

// Is the database initialized or do we need to initialize it?
const stmt = db.prepare(`SELECT name FROM sqlite_master WHERE type='table' and name='history';`);
let row = stmt.get();
if (row === undefined) {
// Echo that the database is empty and it will be created to the console.
    console.log('Your database appears to be empty. I will initialize it now.');
// Set a const that will contain the SQL commands to initialize the database.
    const sqlInit = `
        CREATE TABLE history ( 
            id INTEGER PRIMARY KEY, 
            username TEXT, 
            type TEXT,
            time INTEGER
        )
    `;
// Execute SQL commands that we just created above. ^^^
    db.exec(sqlInit);
    console.log('Your database has been initialized with a new table.');
} else {
// Echo to the console taht the databse has already been created and exists.
    console.log('Database exists.')
}
// Export all of the above as a module so that we can use it elsewhere.
module.exports = db