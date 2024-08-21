// Peça

let pecas = [];

app.post('/pecas', (req, res) => {
    const peça = req.body;
    peça.id = pecas.length + 1;
    pecas.push(peça);
    res.status(201).send(peça);
});

app.get('/pecas', (req, res) => {
    res.send(pecas);
});

app.put('/pecas/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const peçaIndex = pecas.findIndex(p => p.id === id);
    if (peçaIndex !== -1) {
        pecas[peçaIndex] = { id, ...req.body };
        res.send(pecas[peçaIndex]);
    } else {
        res.status(404).send({ error: 'Peça não encontrada' });
    }
});

app.delete('/pecas/:id', (req, res) => {
    const id = parseInt(req.params.id);
    pecas = pecas.filter(p => p.id !== id);
    res.send({ message: 'Peça excluída' });
});
