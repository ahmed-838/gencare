// backend/config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
    try {

        const dbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/gen_care';
        await mongoose.connect(dbURI);

        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Error connecting to MongoDB', err);
        console.log('Running without database connection...');
    }
};

module.exports = connectDB;
