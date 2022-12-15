const { resolve } = require("path");
const db = require("../database/db");

class compradasRepository {
  constructor() {
    this.db = db;
  }

  /**
   * Lista todas as musicas compradas
   * @returns Array com dados das musicas compradas
   */

  listAll() {
    return new Promise((resolve, reject) => {
      try {
        this.db.query(
          `SELECT * FROM compradas`,
          [],
          async (error, response) => {
            if (error) return reject(new Error(error));
            return resolve({ compradas: response });
          }
        );
      } catch (error) {
        return reject(new Error(error));
      }
    });
  }

  /**
   * Registra uma nova musica comprada
   * @param {*} data Dados da musica
   * @returns "Musica registrada com sucesso"
   */

  register(data) {
    return new Promise((resolve, reject) => {
      try {
        this.db.query(
          `INSERT INTO compradas (nome, artista, album, lincenca_comprada, venc_licenca, gravadora) VALUES (?,?,?,?,?,?)`,
          [
            data.nome,
            data.artista,
            data.album,
            data.licencaComprada,
            data.vencLicenca,
            data.gravadora,
          ],
          async (error, response) => {
            if (error) return reject(new Error(error));
            return resolve({ sucess: "Musica registrada com sucesso" });
          }
        );
      } catch (error) {
        return reject(new Error(error));
      }
    });
  }

  /**
   * Remove uma musica comprada
   * @param {*} id id da musica
   * @returns "Musica removida com sucesso"
   */

  remove(id) {
    return new Promise((resolve, reject) => {
      try {
        this.db.query(
          "DELETE FROM compradas where id=?",
          [id],
          async (error, response) => {
            if (error) return reject(new Error(error));
            return resolve({ sucess: "Musica removida com sucesso" });
          }
        );
      } catch (error) {
        return reject(new Error(error));
      }
    });
  }
}

module.exports = compradasRepository;
