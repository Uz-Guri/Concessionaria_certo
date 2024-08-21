// Departamento
let departamentos = [];
app.post('/departamentos', (req, res) => {
    const departamento = req.body;
    departamento.id = departamentos.length + 1;
    departamentos.push(departamento);
    res.status(201).send(departamento);
});

app.get('/departamentos', (req, res) => {
    res.send(departamentos);
});

app.put('/departamentos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const departamentoIndex = departamentos.findIndex(d => d.id === id);
    if (departamentoIndex !== -1) {
        departamentos[departamentoIndex] = { id, ...req.body };
        res.send(departamentos[departamentoIndex]);
    } else {
        res.status(404).send({ error: 'Departamento não encontrado' });
    }
});

app.delete('/departamentos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    departamentos = departamentos.filter(d => d.id !== id);
    res.send({ message: 'Departamento excluído' });
});