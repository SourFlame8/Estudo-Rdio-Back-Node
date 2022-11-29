const { resolve } = require("path")
const db = require("../database/db")

class pendentesRepository {
    constructor() {
        this.db = db;
    }

    /**
     * Lista todas as musicas pendentes
     * @returns Array com dados das musicas pendentes
     */

    listAll() {
        return new Promise((resolve, reject) => {
            try {
                this.db.query(`SELECT * FROM pendentes`,
                    [],
                    async (error, response) => {
                        if (error) return reject(new Error(error));
                        return resolve({ pendentes: response });
                    })
            } catch (error) {
                return reject(new Error(error))
            }
        })
    }

    /**
     * Registra uma musica pendente
     * @param {*} data dados da musica
     * @returns Musica registrada com sucesso
     */

    register(data) {
        return new Promise((resolve, reject) => {
            try {
                this.db.query(`INSERT INTO pendentes (nome, artista, album, gravadora, situacao_compra) VALUES (?,?,?,?,?)`,
                    [data.nome, data.artista, data.album, data.gravadora, data.situacaoCompra],
                    async (error, response) => {
                        if (error) return reject(new Error(error));
                        return resolve({ sucess: "Musica registrada com sucesso" });
                    })
            } catch (error) {
                return reject(new Error(error));
            }
        })
    }

    /**
     * Remove uma musica pendente
     * @param {*} id id da musica
     * @returns Musica removida com sucesso
     */

    remove(id){
        return new Promise((resolve, reject) => {
            try{
                this.db.query(`REMOVE FROM pendentes WHERE id = ?`, 
                [id],
                async (error, response) => {
                    if (error) return reject (new Error(error));
                    return resolve({sucess: "Musica removida com sucesso"})
                })
            } catch (error) {
                return reject (new Error(error));
            }
        })
    }
}

module.exports = pendentesRepository;