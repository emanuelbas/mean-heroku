const { Router } = require('express');
const router = Router();
const MedicoDerivante = require('../models/MedicoDerivante');
const User = require('../models/User');
const Estudio = require('../models/Estudio');
const Paciente = require('../models/Paciente');
const TipoDeEstudio = require('../models/TipoDeEstudio');
const DiagnosticoPresuntivo = require('../models/DiagnosticoPresuntivo');
const Empleado = require('../models/Empleado');
const Estado = require('../models/Estado');
const ObraSocial = require('../models/ObraSocial');
const HistorialDeEstudio = require('../models/HistorialDeEstudio');

const Turno = require('../models/Turno');

const pruebaTurnos = async (req, res) => {console.log("entre");res.send('Hola!')}

const getTurnosLibres = async (req, res) => {
    console.log("Se ingresa al controlador");

    let fechaOrigen = new Date(req.params.date)
    fechaOrigen.setHours('09')
    fechaOrigen.setSeconds('00')
    fechaOrigen.setMinutes('00')
    let fechaSig = new Date(req.params.date)
    fechaSig.setHours('09')
    fechaSig.setSeconds('00')
    fechaSig.setMinutes('00')
    fechaSig.setDate(fechaSig.getDate() + 1)
    console.log("Se definieron las fechas origen y sig");
    console.log(new Date(fechaOrigen))

    // Si el día es sabado o domingo que devuelva una lista vacia

    Turno.find({
        fecha : {
            $gte: fechaOrigen,
            $lt: fechaSig
        }
    }).then((turnosOcupados)=>{
        console.log("@@@ Se leyeron estos turnos @@@")
        console.log(turnosOcupados)

        turnosDisponibles = []
        turnoActual = new Date(fechaOrigen)
        for (let h = 9; h < 13; h++) {
            turnoActual.setHours(h)
            for (let m = 0; m <= 45; m+=15) {
                turnoActual.setMinutes(m)
                nuevoTurno = new Date(turnoActual)
                if (!turnoEstaOcupado(turnosOcupados, nuevoTurno)) {
                    turnosDisponibles.push(nuevoTurno)
                }
            }            
        }
        res.send(turnosDisponibles)
    })
}

const turnoEstaOcupado = (turnosOcupados, nuevoTurno) => {
    return (turnosOcupados.find(turno => {turno.getTime() == nuevoTurno.getTime()}) || [] ).length > 0
}

const tomarTurno = async (req, res) => {



    res.send('respuesta')

}

module.exports ={
    pruebaTurnos,
    getTurnosLibres,
    tomarTurno
}