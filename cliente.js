// Cliente

let clientes = [];

app.post('/clientes', (req, res) => {
    const cliente = req.body;
    cliente.id = clientes.length + 1;
    clientes.push(cliente);
    res.status(201).send(cliente);
  });
  
  app.get('/clientes', (req, res) => {
    res.send(clientes);
  });
  
  app.put('/clientes/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const clienteIndex = clientes.findIndex(c => c.id === id);
    if (clienteIndex !== -1) {
      clientes[clienteIndex] = { id, ...req.body };
      res.send(clientes[clienteIndex]);
    } else {
      res.status(404).send({ error: 'Cliente não encontrado' });
    }
  });
  
  app.delete('/clientes/:id', (req, res) => {
    const id = parseInt(req.params.id);
    clientes = clientes.filter(c => c.id !== id);
    res.send({ message: 'Cliente excluído' });
  });