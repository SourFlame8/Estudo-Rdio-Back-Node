const express = require("express");
const routes = express.Router();
// const multerUpload = require("../middlewares/multer")
//Compradas:
const CompradasController = require("../controllers/compradasController");
const compradasController = new CompradasController();
//Pendentes:
const PendentesController = require("../controllers/pendentesController");
const pendentesController = new PendentesController();
//Usuários:
const UsuariosController = require("../controllers/usuariosController");
const usuariosController = new UsuariosController();

//Rotas das Musicas Compradas:
routes.get("/Compradas", compradasController.listAll())
routes.post("/Compradas", compradasController.register())
routes.delete("/Compradas/:id", compradasController.remove())

//Rotas das Musicas Pendentes:
routes.get("/Pendentes", pendentesController.listAll())
routes.post("/Pendentes", pendentesController.register())
routes.delete("/Pendentes/:id", pendentesController.remove())

//Rotas de Usuários:
routes.get("/Usuarios", usuariosController.listAll())
routes.post("/Usuarios/register", usuariosController.register())
routes.post("/Usuarios/login", usuariosController.login());
routes.delete("/Usuarios/:id", usuariosController.remove())

module.exports = routes;