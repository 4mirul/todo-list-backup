const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    host: "192.168.0.193",
    port: 5432,
    database: "todo-list"
});

module.exports = pool;
