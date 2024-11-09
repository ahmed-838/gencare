// backend/routes/diseaseRoutes.js
const express = require('express');
const Disease = require('../models/Disease');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const diseases = await Disease.find().sort({ disease_name: 1 });
        res.render('home', { diseases });  // تمرير diseases إلى صفحة EJS
    } catch (error) {
        console.error("Error fetching diseases:", error);
        res.status(500).send("Error fetching data.");
    }
});


router.get('/:id', async (req, res) => {
    try {
        const disease = await Disease.findById(req.params.id);
        if (!disease) {
            return res.status(404).send('Disease not found');
        }
        res.render('diseaseDetails', { disease });
    } catch (error) {
        console.error("Error fetching disease details:", error);
        res.status(500).send("Error fetching data.");
    }
});
router.post('/add', async (req, res) => {
    try {
        console.log(req.body); 
        const { disease_name, disease_image, disease_summary, disease_body, expected_pregnancy_period, disease_details_link } = req.body;

        if (!disease_name || !disease_image || !disease_summary || !disease_body || !expected_pregnancy_period || !disease_details_link) {
            return res.status(400).send("All fields are required.");
        }

        const newDisease = new Disease({
            disease_name,
            disease_image,
            disease_summary,
            disease_body,
            expected_pregnancy_period,
            disease_details_link
        });

        await newDisease.save();
        res.status(201).send('Disease added successfully');
    } catch (error) {
        console.error("Error adding disease:", error);
        res.status(500).send("Error adding disease.");
    }
});


module.exports = router;
