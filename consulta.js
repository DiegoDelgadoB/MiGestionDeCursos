const {Pool} = require("pg");
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    password: "postgres123",
    database: "cursos",
    port: 5432
});

