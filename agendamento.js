// Agendamento

let agendamentos = [];

app.post('/agendamentos', (req, res) => {
    const agendamento = req.body;
    agendamento.id = agendamentos.length + 1;
    agendamentos.push(agendamento);
    res.status(201).send(agendamento);
  });

  app.get('/agendamentos', (req, res) => {
    res.send(agendamentos);
  });

  app.put('/agendamentos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const agendamentoIndex = agendamentos.findIndex(a => a.id === id);
    if (agendamentoIndex !== -1) {
      agendamentos[agendamentoIndex] = { id, ...req.body };
      res.send(agendamentos[agendamentoIndex]);
    } else {
      res.status(404).send({ error: 'Agendamento não encontrado' });
    }
  });

  app.delete('/agendamentos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    agendamentos = agendamentos.filter(a => a.id !== id);
    res.send({ message: 'Agendamento excluído' });
  });
