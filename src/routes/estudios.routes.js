const { Router } = require('express');
const router = Router();
const estudioControllers = require('../controllers/estudio.controllers');
const pacienteControllers = require('../controllers/paciente.controllers');

router.get('/', estudioControllers.pruebaHola);
router.get('/obtener-estudios', estudioControllers.getEstudios)
router.post('/alta-estudio', estudioControllers.altaEstudio)
router.get('/obtener-estudio', estudioControllers.getEstudio)
router.get('/cambiar-estado', estudioControllers.changeEstado)
router.get('/descargar-presupuesto/:_id', estudioControllers.downloadPresupuesto)
router.get('/estudio-getAll', estudioControllers.getAll)
router.get('/obtener-estudios-por-estado', estudioControllers.estudiosPorEstado)
router.get('/obtener-ganancias-mensuales', estudioControllers.gananciasMensuales)
router.get('/obtener-duracion-anual', estudioControllers.promedioDuracionEstudioPorAño)
router.get('/descargar-consentimiento/:_id', estudioControllers.downloadConsentimiento)
router.get('/registrar-toma-de-muestra', estudioControllers.registraTomaMuestra)
router.get('/estudios-de-paciente', estudioControllers.getEstudiosUser)

router.get('/obtener-pacientes', pacienteControllers.getPacientes)
router.post('/autoregistro-paciente', pacienteControllers.autoregistro)


module.exports = router