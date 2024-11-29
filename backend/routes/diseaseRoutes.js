// backend/routes/diseaseRoutes.js
const express = require('express');
const Disease = require('../models/Disease');
const router = express.Router();

const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/diseases-images'); 
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + '-' + file.originalname);
    }
});

const upload = multer({ storage });

router.get('/', async (req, res) => {
    try {
        const diseases = await Disease.find().sort({ disease_name: 1 });
        res.render('pages/admin/diseases', { diseases });  // تمرير diseases إلى صفحة EJS
    } catch (error) {
        console.error("Error fetching diseases:", error);
        res.status(500).send("Error fetching data.");
    }
});

router.get('/getdata', async (req, res) => {
    try {
         const diseases = await Disease.find();
         res.json(diseases)
      //  res.render('pages/disease/diseasedisplay');
    } catch (error) {
        console.error("Error fetching disease details:", error);
        res.status(500).send("Error fetching data.");
    }
});

router.get('/display', async (req, res) => {
    try {
        res.render('pages/disease/diseasedisplay');
    } catch (error) {
        console.error("Error fetching disease details:", error);
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
router.post('/add', upload.single('disease_image'), async (req, res) => {
    try {
        const { disease_name, disease_summary, disease_body, expected_pregnancy_period, disease_details_link } = req.body;

        if (!disease_name || !req.file || !disease_summary || !disease_body || !expected_pregnancy_period || !disease_details_link) {
            return res.status(400).send("All fields are required.");
        }

        const newDisease = new Disease({
            disease_name,
            disease_image: `/uploads/diseases-images/${req.file.filename}`, // حفظ رابط الصورة
            disease_summary,
            disease_body,
            expected_pregnancy_period,
            disease_details_link
        });

        await newDisease.save();
        res.redirect('/diseasesManagement'); // إعادة توجيه
    } catch (error) {
        console.error("Error adding disease:", error);
        res.status(500).send("Error adding disease.");
    }
});


module.exports = router;
