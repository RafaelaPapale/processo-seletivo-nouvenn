const express = require('express');
const UsuarioController = require ('../controllers/usuarioController.js');
const LivroController = require ('../controllers/livroController.js');
const router = express.Router();

router.post('/usuarios', UsuarioController.Insert);
router.get('/usuarios', UsuarioController.SearchAll);
router.get('/usuarios/:id', UsuarioController.SearchOne);
router.put('/usuarios/:id', UsuarioController.Update);
router.delete('/usuarios/:id', UsuarioController.Delete);

router.post('/livros', LivroController.Insert);
router.get('/livros', LivroController.SearchAll);
router.get('/livros/:id', LivroController.SearchOne);
router.put('/livros/:id', LivroController.Update);
router.delete('/livros/:id', LivroController.Delete);

module.exports = router;