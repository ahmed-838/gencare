const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        res.render('home'); 
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
