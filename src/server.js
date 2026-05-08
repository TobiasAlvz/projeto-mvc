const express = require ('express');
const path = require ('path');

const app = express ();

// Importando router
const router = require ('../router');

// EJS
app.set ('view engine', 'ejs');
app.set ('views', path.join (__dirname, 'views'));

// Middlewares
app.use (express.urlencoded ({extended: true}));

// Arquivos estáticos
app.use (express.static (path.join (__dirname, 'public')));

// Rotas
app.use ('/', router);

// Servidor
const PORT = process.env.PORT || 3000;

app.listen (PORT, () => {
  console.log (`Servidor rodando em http://localhost:${PORT}`);
});
