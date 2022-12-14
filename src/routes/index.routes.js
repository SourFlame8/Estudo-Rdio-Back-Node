const express = require("express");
const routes = express.Router();
// const multerUpload = require("../middlewares/multer")
const CompradasController = require("../controllers/compradasController")
const compradasController = new CompradasController();

//Rotas das Musicas Compradas:
routes.get("/Compradas", compradasController.listAll())

module.exports = routes;