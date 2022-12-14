const express = require("express");
const routes = express.Router();
// const multerUpload = require("../middlewares/multer")
const CompradasController = require("../controllers/compradasController");
const compradasController = new CompradasController();
const PendentesController = require("../controllers/pendentesController");
const pendentesController = new PendentesController();

//Rotas das Musicas Compradas:
routes.get("/Compradas", compradasController.listAll())

//Rotas das Musicas Pendentes:
routes.get("/Pendentes", pendentesController.listAll())

module.exports = routes;