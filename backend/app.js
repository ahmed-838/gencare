// backend/app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');
const path = require('path');  
require('dotenv').config();
const passport = require('passport');
const session = require('express-session');
require('./config/google-passport');
const cookieParser = require('cookie-parser');



const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
  
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? 'https://yourdomain.com' 
    : `http://localhost:${process.env.PORT}`,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/home/node_modules',
     express.static(path.join(__dirname, '../frontend/public/app_modules/home_modules/node_modules')));

    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, '../frontend/views'));
app.use(express.static(path.join(__dirname, '../frontend/public')));

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    sameSite: 'lax',
    maxAge:  60 * 60 * 1000 // يوم واحد
  }
}));

app.use(passport.initialize());
app.use(passport.session());

connectDB();
const diseaseRoutes = require('./routes/diseaseRoutes'); 
const weekRoutes = require('./routes/weekRoutes');
const homeRoutes = require('./routes/homeRoutes');
const adminDashboard = require('./routes/adminDashboardRoutes');
const AIpageRoutes = require('./routes/ai_pageRoutes');
const authRoutes = require('./routes/authRoutes');
const checkAuthenticationRoutes = require('./routes/checkAuthenticationRoutes');
const babyNamesRoutes = require('./routes/babyNamesRoutes');
const googleRoutes = require('./routes/googleRoutes');


app.use('/weeksManagement/', weekRoutes);
app.use('/', homeRoutes);
app.use('/diseasesManagement', diseaseRoutes);
app.use('/dashboard', adminDashboard);
app.use('/ai-page', AIpageRoutes);
app.use('/auth', authRoutes);
app.use('/api/check-auth', checkAuthenticationRoutes);
app.use('/baby-names', babyNamesRoutes);
app.use('/auth/google', googleRoutes);

module.exports = app;
 