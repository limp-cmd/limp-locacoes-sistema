const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h1>LIMP LOCAÇÕES</h1><a href="/login">Entrar no sistema</a>');
});

app.get('/login', (req, res) => {
  res.send('<h2>Login</h2><p>Sistema em desenvolvimento</p>');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
  console.log('Servidor rodando');
});
