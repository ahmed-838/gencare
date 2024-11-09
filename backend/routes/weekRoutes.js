// backend/routes/weekRoutes.js
const express = require('express');
const router = express.Router();
const PregnancyWeek = require('../models/PregnancyWeek');
const multer = require('multer');
const path = require('path');  
const fs = require('fs');



const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadPath = 'uploads/weeks_images/';
        
        if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath, { recursive: true });
        }
        
        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage });

router.get('/basic', async (req, res) => {
    try {
        const weeks = await PregnancyWeek.find({}, { 
            week_number: 1, 
            week_image: 1 
        }).sort({ week_number: 1 });
        res.json(weeks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/', upload.single('week_image'), async (req, res) => {
    try {
        console.log('Request Body:', req.body); 
        console.log('Uploaded File:', req.file); 

        if (!req.file) {
            return res.status(400).json({ error: "Image file is required" });
        }

        const week_image = `/uploads/weeks_images/${req.file.filename}`;

        const week = new PregnancyWeek({
            week_number: req.body.week_number,
            week_color: req.body.week_color,
            week_image: week_image,  // تخزين المسار
            week_video_link: req.body.week_video_link,
            title1: req.body.title1,
            essay1: req.body.essay1,
            title2: req.body.title2,
            essay2: req.body.essay2
        });

        await week.save();

        res.status(201).json({ message: 'Week created successfully' });
    } catch (error) {
        console.error("Error:", error);
        res.status(400).json({ error: error.message });
    }
});


router.get('/', async (req, res) => {
    try {
        // استرجاع جميع الأسابيع من قاعدة البيانات
        const weeks = await PregnancyWeek.find();

        // إرسال الأسابيع إلى صفحة EJS
        res.render('pages/admin/weeks', { weeks });
    } catch (error) {
        console.error("Error getting the manage weeks page:", error);
        res.status(500).send("Error fetching data.");
    }
});


router.get('/:week_number', async (req, res) => {
    try {
        const week = await PregnancyWeek.findOne({ week_number: req.params.week_number });
        if (!week) {
            return res.status(404).json({ error: 'Week not found' });
        }

        const videoID = week.week_video_link.split('v=')[1]?.split('&')[0];
        const videoEmbedLink = videoID ? `https://www.youtube.com/embed/${videoID}` : null;

        // إرسال البيانات إلى الـ EJS بعد تعديل الرابط
        res.render('pages/weeks/weeksDisplay', { 
            week: { 
                ...week.toObject(), 
                week_video_link: videoEmbedLink 
            } 
        });
    } catch (error) {
        console.error("Error getting week data:", error);
        res.status(500).send("Error fetching data.");
    }
});

module.exports = router;
