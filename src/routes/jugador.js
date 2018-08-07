const express = require('express');
const router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

const jugador = require('../models/jugadoresModel');

/*
router.get('/', async (req, res) =>{
    const j = await jugador.find();
    res.json(j);
});
*/
router.get('/', (req, res) => {
    jugador.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error al recuperar los jugadores :' + JSON.stringify(err, undefined, 2)); }
    });
});

/*
router.get('/:cedula', async (req, res) =>{
    let cedula = req.params.cedula
    await jugador.findOne( {cedula:cedula}, (err, j) => {
        if(err) return res.status(500).send({ message: 'error al realizar la peticion'})
        if(!j) return res.status(404).send({ mesagge :' el jugador no exite'})

        res.json(j)
    })
});
*/
router.get('/:cedula', (req, res) => {
    if (!ObjectId.isValid(req.params.cedula))
        return res.status(400).send(`Sin registro : ${req.params.cedula}`);

    Employee.findById(req.params.cedula, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error al recuperar el jugador :' + JSON.stringify(err, undefined, 2)); }
    });
});

/*
router.put('/', async (req, res) => {
    const j = new jugador(req.body);
    j.fechaNacimiento.toISOString()
    await j.save();
    res.send(200);
});
*/
router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`Sin registro : ${req.params.id}`);

    var jug = {
        nombre: req.body.nombre,
        cedula: req.body.cedula,
        posicion: req.body.posicion,
        numeroCamiseta: req.body.numeroCamiseta,
        equipo: req.body.equipo,
        fechaNacimiento: req.body.fechaNacimiento
    };
    jugador.findByIdAndUpdate(req.params.id, { $set: jug }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error al actualizar los jugadores :' + JSON.stringify(err, undefined, 2)); }
    });
});

/*
router.post('/', async (req, res) => {
    let j = await jugador.findOne({cedula:req.body.cedula})
    Object.assign(j, req.body)
    await j.save()
    res.send(200);
});
*/
router.post('/', (req, res) => {
    var jug = new jugador({
        nombre: req.body.nombre,
        cedula: req.body.cedula,
        posicion: req.body.posicion,
        numeroCamiseta: req.body.numeroCamiseta,
        equipo: req.body.equipo,
        fechaNacimiento: req.body.fechaNacimiento
    });
    jug.save((err, doc) => {
        if (!err) { 
            res.send(doc); 
            //res.send(200);
        }
        else { console.log('Error al guardar el jugador :' + JSON.stringify(err, undefined, 2)); }
    });
});

/*
router.delete('/:cedula', async (req, res) => {
    let cedula = req.params.cedula
    await jugador.findOneAndRemove({cedula:cedula});
    res.send(200);
 });
 */
router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`Sin registro : ${req.params.id}`);

    jugador.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;