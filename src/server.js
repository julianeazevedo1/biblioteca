const express = require('express');
const cors = require('cors');
require('dotenv').config();

// ✅ IMPORTAR ROTAS 
const livroRoutes = require('./routes/livroRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// ✅ usar rotas
app.use(livroRoutes);

// rota teste
app.get('/', (req, res) => {
  res.send('API Bibliotech funcionando!');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});