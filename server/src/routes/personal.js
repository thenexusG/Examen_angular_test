const express = require('express');
const router = express.Router();

const mysqlConnection = require('./database')

router.get('/', (req, res) => {
    mysqlConnection.query('SELECT * FROM personas', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('SELECT * FROM personas WHERE id = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    })
});

router.post('/', (req, res) => {
    const { Nombre, ApellidoP, ApellidoM, Direccion, Telefono } = req.body;
    mysqlConnection.query('INSERT INTO personas (Id, Nombre, ApellidoP, ApellidoM, Direccion, Telefono) VALUES (NULL, ?, ?, ?, ?, ?)', [Nombre, ApellidoP, ApellidoM, Direccion, Telefono], (err, rows, fields) => {
        if (!err) {
            res.json({Status: 'Data saved'});
        } else {
            console.log(err);
        }
    })
});

router.put('/:id', (req, res) => {
    const { Nombre, ApellidoP, ApellidoM, Direccion, Telefono } = req.body;
    const { id } = req.params;
    mysqlConnection.query('UPDATE personas SET Nombre = ?, ApellidoP = ?, ApellidoM = ?, Direccion = ?, Telefono = ? WHERE Id = ?', [Nombre, ApellidoP, ApellidoM, Direccion, Telefono, id], (err, rows, fields) => {
        if (!err) {
            res.json({Status: 'Data updated'});
        } else {
            console.log(err);
        }
    })
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('DELETE FROM personas WHERE id = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json({Status: 'Data deleted'});
        } else {
            console.log(err);
        }
    })
});
module.exports = router;