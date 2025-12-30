const express = require("express");
const fs = require("fs");

const app = express();

app.use(express.json());
app.use(express.static("public"));

app.post("/salvar", (req, res) => {
  fs.writeFileSync("texto.txt", req.body.texto);
  res.sendStatus(200);
});

app.get("/texto", (req, res) => {
  const texto = fs.existsSync("texto.txt")
    ? fs.readFileSync("texto.txt", "utf8")
    : "";
  res.send(texto);
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
