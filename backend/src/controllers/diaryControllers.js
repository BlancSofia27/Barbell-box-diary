const express = require('express');
const Diary = require('../models/diaryModel');

// Controlador para crear un nuevo turno
const createTurnInDiary = async ( userName, dayTurn, hourTurn) => {

        // Crea una nueva instancia del modelo Diary
        const newTurn = new Diary({
            userName,
            dayTurn,
            hourTurn,
        });

        // Guarda el nuevo turno en la base de datos
        const savedTurn = await newTurn.save();
        console.log(savedTurn)
    }

    const getUserTurns = async (userName) => {
        const turns = await Diary.find({ userName }).select('userName dayTurn hourTurn');;
        return turns;
      };
      

module.exports = {
    createTurnInDiary,getUserTurns
};

