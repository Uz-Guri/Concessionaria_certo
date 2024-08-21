const express = require('express');
const app = express();
app.use(express.json());

// Estruturas de dados em memória

let agendamentos = [];

// Modelos (Sem persistência real)

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

// Manutenção
let manutenções = [];
app.post('/manutencoes', (req, res) => {
    const manutencao = req.body;
    manutencao.id = manutenções.length + 1;
    manutenções.push(manutencao);
    res.status(201).send(manutencao);
});

app.get('/manutencoes', (req, res) => {
  res.send(manutenções);
});

app.put('/manutencoes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const manutencaoIndex = manutenções.findIndex(m => m.id === id);
  if (manutencaoIndex !== -1) {
    manutenções[manutencaoIndex] = { id, ...req.body };
    res.send(manutenções)}})