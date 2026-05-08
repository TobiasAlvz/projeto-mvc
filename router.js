const express = require('express');

const router = express.Router();

// Controllers
const postController = require('./src/controllers/postController');
const adminController = require('./src/controllers/adminController');

// Página inicial
router.get('/', postController.index);

// Página do post
router.get('/posts/:id', postController.show);

// ================= ADMIN =================

// Página admin
router.get('/admin', adminController.showAdminPage);

// Criar post
router.get('/admin/create', adminController.showCreatePage);
router.post('/admin/create', adminController.createPost);

// Editar post
router.get('/admin/edit/:id', adminController.showEditPage);
router.post('/admin/update/:id', adminController.updatePost);

// Deletar post
router.post('/admin/delete/:id', adminController.deletePost);

module.exports = router;