const database = require("../config/database");

class Todo {
    constructor() {
        this.model = database.db.define("todos", {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            descricao: {
                type: database.db.Sequelize.STRING
            },
        });
    }
}

module.exports = new Todo().model;