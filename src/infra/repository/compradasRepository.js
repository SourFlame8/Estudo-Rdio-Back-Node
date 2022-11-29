const { resolve } = require("path")
const db = require("../database/db")

class compradasRepository {
    constructor() {
        this.db = db;
    }
}

module.exports = compradasRepository;