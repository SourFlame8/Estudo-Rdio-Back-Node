const express = require("express");
const routes = express.Router();
// const multerUpload = require("../middlewares/multer")

routes.get("/jsonTeste", (req, res) => res.send({sucess: "Hello, world!"}))

routes.get("/TesteMusica", (req, res) => res.send({nome: "Black", artista: "Pearl Jam" ,album: "Ten" ,lincenca: "Dia" ,vencimento: "Dia" ,gravadora: "Gravadora"}))

module.exports = routes;