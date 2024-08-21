// Funcionário

let funcionarios = [];

app.post('/funcionarios', (req, res) => {
    const funcionario = req.body;
    funcionario.id = funcionarios.length + 1;
    funcionarios.push(funcionario);
    res.status(201).send(funcionario);
});

app.get('/funcionarios', (req, res) => {
    res.send(funcionarios);
});

app.put('/funcionarios/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const funcionarioIndex = funcionarios.findIndex(f => f.id === id);
    if (funcionarioIndex !== -1) {
        funcionarios[funcionarioIndex] = { id, ...req.body };
        res.send(funcionarios[funcionarioIndex]);
    } else {
        res.status(404).send({ error: 'Funcionário não encontrado' });
    }
});

app.delete('/funcionarios/:id', (req, res) => {
    const id = parseInt(req.params.id);
    funcionarios = funcionarios.filter(f => f.id !== id);
    res.send({ message: 'Funcionário excluído' });
});