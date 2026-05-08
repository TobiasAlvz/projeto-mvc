const express = require('express');
const path = require('path');

const app = express();
const router = express.Router();

// Importando o controller
const postController = require('./controllers/postController');

// Rotas
router.get('/', postController.index);

// Rota para exibir um post específico
router.get('/posts/:id', postController.show);

// Configuração do EJS como view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Configuração para ler dados do formulário
app.use(express.urlencoded({ extended: true }));

// Configuração para servir arquivos estáticos
app.use(express.static('public'));

// Usando as rotas
app.use(router);

// Inicialização do servidor
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor iniciado!`);
  console.log(`Rodando em http://localhost:${PORT}/`);
});