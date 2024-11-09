const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    try {

        res.render('pages/admin/dashboard');
    } catch (error) {
        console.error("Error getting the manage weeks page :", error);
        res.status(500).send("Error fetching data.");
    }
});


module.exports = router;
