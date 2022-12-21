const { resolve } = require("path");
const db = require("../database/db");

class usuariosRepository {
  constructor() {
    this.db = db;
  }

  /**
   * Lista os usuarios pelo email
   * @param {*} email email do usuario
   * @returns Array com dados do usuario
   */

  getUserByEmail(email) {
    return new Promise((resolve, reject) => {
      this.db.query(
        "SELECT * FROM usuarios WHERE email=?",
        [email],
        async (err, users) => {
          if (err) return reject(new Error(err));

          if (!users[0]) return resolve({ user: null });
          return resolve({ user: users[0] });
        }
      );
    });
  }

  /**
   * Lista todos os usuários
   * @returns Array com dados dos usuários
   */

  listAll() {
    return new Promise((resolve, reject) => {
      try {
        this.db.query(`SELECT * FROM usuarios`, [], async (error, response) => {
          if (error) return reject(new Error(error));
          return resolve({ usuarios: response });
        });
      } catch (error) {
        return reject(new Error(error));
      }
    });
  }

  /**
   * Registra um usuário
   * @param {*} data Dados do usuário
   * @returns Usúario cadastrado com sucesso
   */

  register(data) {
    return new Promise((resolve, reject) => {
      try {
        this.db.query(
          `INSERT INTO usuarios (nome, email, senha, tipo) values (?,?,?,?)`,
          [data.nome, data.email, data.senha, data.tipo],
          async (error, response) => {
            if (error) return reject(new Error(error));
            return resolve({ sucess: "Usuário cadastrado com sucesso" });
          }
        );
      } catch (error) {
        return reject(new Error(error));
      }
    });
  }

  login(data) {
    return new Promise(async (resolve, reject) => {
      const { user } = await this.getUserByEmail(data.email);
      if (!user)
        return resolve({ error: `Usuário não encontrado!`, code: 404 });
      this.db.query(
        `UPDATE usuarios SET auth = ? WHERE email = ?`,
        [data.auth, data.email],
        (error, response) => {
          if (error) return reject(new Error(error));
          return resolve({
            user: {
              id: response.id,
              nome: response.nome,
              email: response.email,
              perfil: response.perfil,
            },
          });
        }
      );
    });
  }

  /**
   * Remove um usuário
   * @param {*} id id do usuário
   * @param {*} email email do usuário
   * @returns Usuário removido com sucesso
   */

  remove(id, email) {
    return new Promise((resolve, reject) => {
      try {
        this.db.query(
          `DELETE FROM usuarios WHERE id=? AND email=?`,
          [id, email],
          async (error, response) => {
            if (error) return reject(new Error(error));
            return resolve({ sucess: "Usuário removido com sucesso" });
          }
        );
      } catch (error) {
        return reject(new Error(error));
      }
    });
  }
}

module.exports = usuariosRepository;
