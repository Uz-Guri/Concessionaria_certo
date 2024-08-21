// Fornecedor

let fornecedores = [];

app.post('/fornecedores', (req, res) => {
    const fornecedor = req.body;
    fornecedor.id = fornecedores.length + 1;
    fornecedores.push(fornecedor);
    res.status(201).send(fornecedor);
});

app.get('/fornecedores', (req, res) => {
    res.send(fornecedores);
});

app.put('/fornecedores/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const fornecedorIndex = fornecedores.findIndex(f => f.id === id);
    if (fornecedorIndex !== -1) {
        fornecedores[fornecedorIndex] = { id, ...req.body };
        res.send(forcedores[fornecedorIndex]);
    } else {
        res.status(404).send({ error: 'Fornecedor não encontrado' });
    }
});

app.delete('/fornecedores/:id', (req, res) => {
    const id = parseInt(req.params.id);
    fornecedores = fornecedores.filter(f => f.id !== id);
    res.send({ message: 'Fornecedor excluído' });
});
