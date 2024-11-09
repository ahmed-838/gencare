// backend/models/Disease.js
const mongoose = require('mongoose');

const DiseaseSchema = new mongoose.Schema({
    disease_name: { type: String, required: true },
    disease_image: { type: String, required: true },
    disease_summary: { type: String, required: true },  
    disease_body: { type: String, required: true }, 
    expected_pregnancy_period: { type: String, required: true },  
    disease_details_link: { type: String, required: true }  
});

module.exports = mongoose.model('Disease', DiseaseSchema);
