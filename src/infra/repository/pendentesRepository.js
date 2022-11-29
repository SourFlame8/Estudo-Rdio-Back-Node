const { resolve } = require("path")
const db = require("../database/db")

class pendentesRepository {
    constructor() {
        this.db = db;
    }
}

module.exports = pendentesRepository;