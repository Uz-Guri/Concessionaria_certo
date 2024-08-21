// Manutenção
let manutenções = [];
app.post("/manutencoes", (req, res) => {
  const manutencao = req.body;
  manutencao.id = manutenções.length + 1;
  manutenções.push(manutencao);
  res.status(201).send(manutencao);
});

app.get("/manutencoes", (req, res) => {
  res.send(manutenções);
});

app.put("/manutencoes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const manutencaoIndex = manutenções.findIndex((m) => m.id === id);
  if (manutencaoIndex !== -1) {
    manutenções[manutencaoIndex] = { id, ...req.body };
    res.send(manutenções[manutencaoIndex]);
  } else {
    res.status(404).send({ error: "Manutenção não encontrada" });
  }
});

app.delete("/manutencoes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  manutenções = manutenções.filter((m) => m.id !== id);
  res.send({ message: "Manutenção excluída" });
});
