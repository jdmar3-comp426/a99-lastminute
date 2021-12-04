const Database = require('better-sqlite3');
const db = new Database('users.db');

const stmt = db.prepare(`SELECT name FROM sqlite_master WHERE type='table' and name='userinfo';`);
let row = stmt.get();
if (row === undefined) {
    console.log('Your database appears to be empty. I will initialize it now.');

    const sqlInit = `
        CREATE TABLE userinfo ( 
            id INTEGER PRIMARY KEY, 
            username TEXT, 
            password TEXT,
            pizzas INTEGER,
            balance INTEGER,
            cpp INTEGER,
            spending INTEGER,
            revenue INTEGER,
            pepperoni INTEGER,
            mushroom INTEGER,
            pepper INTEGER,
            sausage INTEGER,
            olive INTEGER,
            cheese INTEGER
        )
    `;
    db.exec(sqlInit);
    console.log('Your database has been initialized with a new table.');
} else {
    console.log('Database exists.')
}
module.exports = db