const express = require('express');
const router = express.Router();
const FuncControllers = require('../controllers/funcControllers.js');

router.get('/funcionario', FuncControllers.index);
router.post('/funcionario', FuncControllers.store);
router.put('/funcionario/:codigo', FuncControllers.update);
router.delete('/funcionario/:codigo', FuncControllers.delete);

module.exports = router;