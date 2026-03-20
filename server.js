const express = require('express');
const app = express();
let veiculos = [];
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
  res.send('<h1>LIMP LOCAÇÕES</h1><a href="/login">Entrar no sistema</a>');
});

app.get('/login', (req, res) => {
  res.send('<h2>Login</h2><a href="/dashboard">Entrar no sistema</a>');
});

const PORT = process.env.PORT || 3000;
app.get('/dashboard', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Dashboard</title>
        <style>
          body {
            font-family: Arial;
            margin: 0;
            display: flex;
          }
          .menu {
            width: 200px;
            background: black;
            color: white;
            height: 100vh;
            padding: 20px;
          }
          .menu a {
            display: block;
            color: white;
            margin: 10px 0;
            text-decoration: none;
          }
          .content {
            flex: 1;
            padding: 20px;
          }
        </style>
      </head>
      <body>
        <div class="menu">
          <h3>LIMP</h3>
          <a href="#">Frota</a>
          <a href="#">Abastecimento</a>
          <a href="#">Manutenção</a>
          <a href="#">Financeiro</a>
        </div>
        <div class="content">
          <h1>Dashboard</h1>
          <p>Sistema iniciado com sucesso 🚀</p>
        </div>
      </body>
    </html>
  `);
});
app.get('/frota', (req, res) => {
  let lista = veiculos.map(v => `<li>${v.placa} - ${v.modelo}</li>`).join('');

  res.send(`
    <h1>Frota</h1>
    <ul>${lista}</ul>

    <h3>Cadastrar Veículo</h3>
    <form method="POST" action="/frota">
      <input name="placa" placeholder="Placa" required />
      <input name="modelo" placeholder="Modelo" required />
      <button type="submit">Salvar</button>
    </form>

    <br>
    <a href="/dashboard">Voltar</a>
  `);app.post('/frota', (req, res) => {
  const { placa, modelo } = req.body;

  veiculos.push({ placa, modelo });

  res.redirect('/frota');
});
});app.listen(PORT, '0.0.0.0', () => {
  console.log('Servidor rodando');
});
