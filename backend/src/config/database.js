const { Sequelize } = require("sequelize");

class Database {
    constructor() {
        this.init();
    }
    init() {
        this.db = new Sequelize({
            database: "todoLogica",
            host: "localhost",
            username: "root",
            dialect: "mssql",
            password: ""
        });
    }
}

module.exports = new Database();