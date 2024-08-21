// Venda

let vendas = [];

app.post('/vendas', (req, res) => {
    const venda = req.body;
    venda.id = vendas.length + 1;
    vendas.push(venda);
    res.status(201).send(venda);
});

app.get('/vendas', (req, res) => {
    res.send(vendas);
});

app.put('/vendas/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const vendaIndex = vendas.findIndex(v => v.id === id);
    if (vendaIndex !== -1) {
        vendas[vendaIndex] = { id, ...req.body };
        res.send(vendas[vendaIndex]);
    } else {
        res.status(404).send({ error: 'Venda não encontrada' });
    }
});

app.delete('/vendas/:id', (req, res) => {
    const id = parseInt(req.params.id);
    vendas = vendas.filter(v => v.id !== id);
    res.send({ message: 'Venda excluída' });
});
