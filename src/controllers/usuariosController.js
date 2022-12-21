const UsuariosRepository = require("../infra/repository/usuariosRepository");
const usuariosRepository = new UsuariosRepository();

class usuariosController {
  /**
   * Lista todos os usuarios
   * @returns Array com dados dos usuarios
   */

  listAll() {
    return (req, res) => {
      usuariosRepository
        .listAll()
        .then((response) => {
          if (response.error)
            return res.status(response.error).send({ error: response.error });
          res.status(200).send({ response });
        })
        .catch((error) => {
          throw new Error(error);
        });
    };
  }

  /**
   * Registra um usuario
   * @returns Mensagem de sucesso
   */

  register() {
    return (req, res) => {
      const { data } = req.body;

      usuariosRepository
        .register(data)
        .then((response) => {
          if (response.error)
            return res.status(response.error).send({ error: response.error });
          res.status(200).send({ response });
        })
        .catch((error) => {
          throw new Error(error);
        });
    };
  }

  login() {
    return (req, res) => {
      const { data } = req.body;

      usuariosRepository
        .login(data)
        .then((response) => {
          if (response.error)
            return res.status(response.error).send({ error: response.error });
          res.status(200).send({ response });
        })
        .catch((error) => {
          throw new Error(error);
        });
    };
  }

  /**
   * Remove um usuário
   * @returns Mensagem de sucesso
   */

  remove() {
    return (req, res) => {
      const { id } = req.params;
      const { email } = req.query;

      usuariosRepository
        .remove(id, email)
        .then((response) => {
          if (response.error)
            return res.status(response.error).send({ error: response.error });
          res.status(200).send({ response });
        })
        .catch((error) => {
          throw new Error(error);
        });
    };
  }
}

module.exports = usuariosController;
