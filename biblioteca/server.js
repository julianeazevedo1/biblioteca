const express = require('express');
const cors = require('cors');
require('dotenv').config();

const livroRoutes = require('./livroRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// rotas
app.use(livroRoutes);

// rota teste
app.get('/', (req, res) => {
  res.send('API Bibliotech funcionando!');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});