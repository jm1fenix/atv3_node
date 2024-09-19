const express = require('express');
const path = require('path');

const app = express();
const PORT = 5000;

// Configurar o Express para servir arquivos estáticos
app.use(express.static('public'));

// Rota para a página 1
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'pagina1.html'));
});

// Rota para a página 2
app.get('/pagina2', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'pagina2.html'));
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
