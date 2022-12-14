const { resolve } = require("path")
const db = require("../database/db")

class compradasRepository {
    constructor() {
        this.db = db;
    }

    listAll() {
        return new Promise((resolve, reject) => {
            try {
                this.db.query(`SELECT * FROM compradas`,
                    [],
                    async (error, response) => {
                        if (error) return reject(new Error(error));
                        return resolve({ compradas: response });
                    })
            } catch (error) {
                return reject(new Error(error));
            }
        })
    }

    registrer(data) {
        return new Promise((resolve, reject) => {
            try {
                this.db.query(`INSERT INTO compradas (nome, artista, album, licenca_comprada, venc_licenca, gravadora) VALUES (?,?,?,?,?,?)`,
                    [data.nome, data.artista, data.album, data.licencaComprada, data.vencLicenca, data.gravadora],
                    async (error, response) => {
                        if (error) return reject(new Error(error));
                        return resolve({ sucess: "Musica registrada com sucesso" })
                    })
            } catch (error) {
                return reject(new Error(error));
            }
        })
    }
}

module.exports = compradasRepository;