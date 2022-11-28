const express = require("express");
const routes = require("./routes/index.routes");

const app = express();
const port = 3333
const data = Date.now();
app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta: ${port}`);
    console.log(`last update: ${data}`);
});