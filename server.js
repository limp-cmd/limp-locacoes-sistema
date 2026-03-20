const express = require('express');
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
          h1 {
            color: #f4b400;
          }
          .box {
            background: white;
            padding: 30px;
            border-radius: 10px;
            display: inline-block;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
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
          <button>Entrar no sistema</button>
        </div>
      </body>
    </html>
  `);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
  console.log('Servidor rodando');
});
