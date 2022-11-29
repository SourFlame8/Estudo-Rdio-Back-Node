const express = require("express");
const routes = require("./routes/index.routes");
const morgan = require("morgan");
const fs = require("fs");
const path = require("path");
require("dotenv").config({ path: __dirname + "/./../.env" });

const app = express();
const port = 3333
const data = new Date(
    fs.statSync(path.join(__dirname, "../")).mtime
).toLocaleDateString("pt-br", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
});

app.use(morgan("dev"));
app.use(express.json());
app.use(routes);

app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
    console.log(`last update: ${data}`);
});