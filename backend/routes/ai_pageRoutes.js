const express = require('express');
const router = express.Router();


router.get('/', async (req, res) => {
    try {
        res.render('pages/ai-page/ai_page_display'); 
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
module.exports = router;
