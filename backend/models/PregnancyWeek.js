// backend/models/PregnancyWeek.js
const mongoose = require('mongoose');

const PregnancyWeekSchema = new mongoose.Schema({
    week_number: { type: Number, required: true },
    week_color: { type: String, required: true },
    week_image: { type: String, required: true },
    week_video_link: { type: String, required: true },
    title1: { type: String, required: true },
    essay1: { type: String, required: true },
    title2: { type: String, required: true },
    essay2: { type: String, required: true }
});

module.exports = mongoose.model('PregnancyWeek', PregnancyWeekSchema);
