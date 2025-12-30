const express = require("express");
const fs = require("fs");

const app = express();

app.use(express.json({ limit: "1kb" }));
app.use(express.static("public"));

app.post("/salvar", (req, res) => {
    textoGlobal = req.body.texto;
    res.sendStatus(200);
});

app.get("/texto", (req, res) => {
    res.send(textoGlobal);
});
  
  const texto = req.body.texto;

  if (typeof texto !== "string" || texto.length > 200) {
    return res.status(400).send("Texto inválido");
  }

  fs.writeFileSync("texto.txt", texto);
  res.sendStatus(200);
});


app.get("/texto", (req, res) => {
  const texto = fs.existsSync("texto.txt")
    ? fs.readFileSync("texto.txt", "utf8")
    : "";
  res.send(texto);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Servidor rodando na porta", PORT);
});




