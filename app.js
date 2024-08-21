const express = require('express');
const app = express();
app.use(express.json());

// Estruturas de dados em memória


// Modelos (Sem persistência real)



  // Rota principal
  app.get('/', (req, res) => {
    res.send('Sistema de Concessionária');
  });

  // Iniciar o servidor
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(Servidor rodando na porta ${PORT});
  });
