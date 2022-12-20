const Pendentes = require("../infra/repository/pendentesRepository");
const pendentes = new Pendentes();

class PendentesController {
  /**
   * Lista todas as musicas compradas
   * @returns Array com dados das musicas
   */

  listAll() {
    return (req, res) => {
      pendentes.listAll().then((response) => {
        if (response.error)
          return res.status(response.error).send({ error: response.error });
        res.status(200).send({ response });
      });
    };
  }

  /**
   * Registra uma nova musica comprada
   * @returns Mensagem de Sucesso
   */

  register() {
    return (req, res) => {
      const { data } = req.body;

      pendentes.register(data).then((response) => {
        if (response.error)
          return res.status(response.error).send({ error: response.error });
        res.status(200).send({ response });
      });
    };
  }

  /**
   * Remove uma musica comprada
   * @returns Mensagem de Sucesso
   */

  remove() {
    return (req, res) => {
      const { id } = req.params;

      pendentes.remove(id).then((response) => {
        if (response.error)
          return res.status(response.error).send({ error: response.error });
        res.status(200).send({ response });
      });
    };
  }
}

module.exports = PendentesController;
