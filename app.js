const express = require('express');
const app = express();
const path = require('path');
const db = require('./util/database');
const appointmentRoutes = require('./routes/appointment');

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));

// Serve static files from the 'models' directory
app.use('/models', express.static(path.join(__dirname, 'models')));

app.use('/', appointmentRoutes);

app.listen(3000);
