const Pendentes = require("../infra/repository/pendentesRepository");
const pendentes = new Pendentes();

class PendentesController {
  listAll() {
    return (req, res) => {
      pendentes.listAll().then((response) => {
        if (response.error)
          return res.status(response.error).send({ error: response.error });
        res.status(200).send({ response });
      });
    };
  }
}

module.exports = PendentesController;
