const express = require('express');const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>LIMP LOCAÇÕES</title>
        <style>
          body {
            font-family: Arial;
            background: #f5f5f5;
            text-align: center;
            padding: 50px;
          }
          .box {
            background: white;
            padding: 30px;
            border-radius: 10px;
            display: inline-block;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
          }
          h1 {
            color: #f4b400;
          }
          button {
            padding: 10px 20px;
            background: black;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }
        </style>
      </head>
      <body>
        <div class="box">
          <h1>LIMP LOCAÇÕES</h1>
          <p>Sistema de gestão de frota</p>
          <a href="/login"><button>Entrar no sistema</button></a>
        </div>
      </body>
    </html>
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
          <h2>Login</h2>
          <input type="text" placeholder="Usuário" />
          <input type="password" placeholder="Senha" />
          <button onclick="alert('Login em desenvolvimento')">Entrar</button>
        </div>
      </body>
    </html>
  `);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
  console.log('Servidor rodando');
});
