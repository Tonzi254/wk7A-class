const express = require('express');
const Team = require('../models/model');

const router = express.Router();

module.exports = router;

// CRUD routes
// C - Create
router.post('/', async (req, res) => {
    const data = new Team({
        name: req.body.name,
        stadium: req.body.stadium,
    });
    try {
        // db.teams.insertOne
        const savedData = await data.save();
        res.status(201).json(savedData);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// R - Read
router.get('/', async (req, res) => {
    try {
        const data = await Team.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// U - Update
router.patch('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;

        const data = await Team.findByIdAndUpdate(id, updatedData, { new: true });
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// D - Delete
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;

        const data = await Team.findByIdAndDelete(id);
        res.status(204).json({ message: `The team named ${data.name} has been deleted` });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});