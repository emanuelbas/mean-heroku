const { Router } = require('express');
const router = Router();
const estudioControllers = require('../controllers/estudio.controllers');

router.get('/', estudioControllers.pruebaHola);
router.get('/obtener-estudios', estudioControllers.getEstudios)
router.post('/alta-estudio', estudioControllers.altaEstudio)
router.get('/obtener-estudio', estudioControllers.getEstudio)
router.get('/cambiar-estado', estudioControllers.changeEstado)
router.get('/descargar-presupuesto/:_id', estudioControllers.downloadPresupuesto)
router.post('/subir-comprobante-de-pago', estudioControllers.subirComprobante)
router.get('/estudio-getAll', estudioControllers.getAll)


module.exports = router