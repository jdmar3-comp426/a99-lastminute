const Database = require('better-sqlite3');
const db = new Database('history.db');

const stmt = db.prepare(`SELECT name FROM sqlite_master WHERE type='table' and name='history';`);
let row = stmt.get();
if (row === undefined) {
    console.log('Your database appears to be empty. I will initialize it now.');

    const sqlInit = `
        CREATE TABLE history ( 
            id INTEGER PRIMARY KEY, 
            username TEXT, 
            type TEXT,
            time INTEGER
        )
    `;
    db.exec(sqlInit);
    console.log('Your database has been initialized with a new table.');
} else {
    console.log('Database exists.')
}
module.exports = db