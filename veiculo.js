// Veículo

let veiculos = [];


app.post('/veiculos', (req, res) => {
    const veiculo = req.body;
    veiculo.id = veiculos.length + 1;
    veiculos.push(veiculo);
    res.status(201).send(veiculo);
  });
  
  app.get('/veiculos', (req, res) => {
    res.send(veiculos);
  });
  
  app.put('/veiculos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const veiculoIndex = veiculos.findIndex(v => v.id === id);
    if (veiculoIndex !== -1) {
      veiculos[veiculoIndex] = { id, ...req.body };
      res.send(veiculos[veiculoIndex]);
    } else {
      res.status(404).send({ error: 'Veículo não encontrado' });
    }
  });
  
  app.delete('/veiculos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    veiculos = veiculos.filter(v => v.id !== id);
    res.send({ message: 'Veículo excluído' });
  });