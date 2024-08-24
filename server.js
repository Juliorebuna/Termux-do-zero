const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3000;

// Array de URLs de fundos de anime
const backgrounds = [
    'https://example.com/image1.jpg',
    'https://example.com/image2.jpg',
    'https://example.com/image3.jpg'
];

app.use(cors());

// Middleware para logar requisições
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Rota principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Outras rotas
app.get('/info', (req, res) => {
  res.send('Projeto: Termux do Zero\nDesenvolvedor: juliorebuna\nRepositório GitHub: https://github.com/Juliorebuna');
});

app.get('/status', (req, res) => {
  res.json({ status: 'Servidor está funcionando!', time: new Date() });
});

app.get('/hello/:name', (req, res) => {
  const name = req.params.name;
  res.send(`Hello, ${name}!`);
});

app.get('/search', (req, res) => {
  const query = req.query.q;
  res.send(`Você pesquisou por: ${query}`);
});

// Endpoint para fornecer URLs de fundos
app.get('/api/backgrounds', (req, res) => {
  res.json(backgrounds);
});

// Rota 404
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

// Middleware para tratamento de erros
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo deu errado!');
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
