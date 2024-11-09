// backend/app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');
const path = require('path');  
require('dotenv').config();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
  
app.use(cors());
app.use(bodyParser.json());

app.use('/home/node_modules',
     express.static(path.join(__dirname, '../frontend/public/app_modules/home_modules/node_modules')));

app.set('view engine', 'ejs');
app.set('views', '../frontend/views');
app.use(express.static('../frontend/public'));


connectDB();
const diseaseRoutes = require('./routes/diseaseRoutes'); 
const weekRoutes = require('./routes/weekRoutes');
const homeRoutes = require('./routes/homeRoutes');
const adminDashboard = require('./routes/adminDashboardRoutes');




app.use('/weeksManagement/', weekRoutes);
app.use('/', homeRoutes);
app.use('/diseasesManagement', diseaseRoutes);
app.use('/dashboard', adminDashboard);


module.exports = app;
