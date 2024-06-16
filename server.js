const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

const dbFilePath = 'db.json';

// Ler os dados do arquivo JSON
const readDb = () => {
  const data = fs.readFileSync(dbFilePath);
  return JSON.parse(data);
};

// Escrever os dados no arquivo JSON
const writeDb = (data) => {
  fs.writeFileSync(dbFilePath, JSON.stringify(data, null, 2));
};

// Obter todos os cultos
app.get('/cultos', (req, res) => {
  const db = readDb();
  res.json(db.cultos);
});

// Adicionar um novo culto
app.post('/cultos', (req, res) => {
  const db = readDb();
  const newCulto = req.body;
  db.cultos.push(newCulto);
  writeDb(db);
  res.status(201).json(newCulto);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
