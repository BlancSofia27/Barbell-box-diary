const express = require('express');
const Diary = require('../models/diaryModel');

// Controlador para crear un nuevo turno
async function createTurnInDiary (req, res){
        const { userName, dayTurn, hourTurn } = req.body;

        // Crea una nueva instancia del modelo Diary
        const newTurn = new Diary({
            userName,
            dayTurn,
            hourTurn,
        });

        // Guarda el nuevo turno en la base de datos
        const savedTurn = await newTurn.save();

        // Envía una respuesta con el turno guardado
        res.status(201).json(savedTurn);
    }

module.exports = {
    createTurnInDiary,
};
