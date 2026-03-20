const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send(`
    <h1>LIMP LOCAÇÕES</h1>
    <a href="/login">Entrar no sistema</a>
  `);
});

app.get('/login', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Login</title>
        <style>
          body {
            font-family: Arial;
            background: #f4b400;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
          }
          .login {
            background: white;
            padding: 30px;
            border-radius: 10px;
            text-align: center;
            width: 300px;
          }
          input {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
          }
          button {
            width: 100%;
            padding: 10px;
            background: black;
            color: white;
            border: none;
          }
        </style>
      </head>
      <body>
        <div class="login">
          <h2>LIMP LOCAÇÕES</h2>
          <input type="text" placeholder="Usuário" />
          <input type="password" placeholder="Senha" />
          <button onclick="alert('Login em breve')">Entrar</button>
        </div>
      </body>
    </html>
  `);
});
