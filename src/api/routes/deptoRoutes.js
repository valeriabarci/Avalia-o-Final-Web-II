const express = require('express');
const router = express.Router();
const deptoControllers = require('../controllers/deptoControllers.js');

router.get('/departamento', deptoControllers.index);
router.post('/departamento', deptoControllers.store);
router.put('/departamento/:codigo', deptoControllers.update);
router.delete('/departamento/:codigo', deptoControllers.delete);

module.exports = router;