const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send(`
    <h1>LIMP LOCAÇÕES</h1>
    <p>Sistema online funcionando 🚀</p>
  `);
});

app.listen(3000, () => {
  console.log('Servidor rodando');
});
