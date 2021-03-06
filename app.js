const express = require('express');
const app = express(); 
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const banzukeRoutes = require('./api/routes/Banzuke/banzuke');
const rikishiRoutes = require('./api/routes/Rikishi/rikishi');
const resourceRoutes = require('./api/routes/Resources/Resources');
const tournamentRoutes = require('./api/routes/tournament/Tournament');

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


//routes that handle requests
app.use('/banzuke', banzukeRoutes);
app.use('/rikishi', rikishiRoutes);
app.use('/resources', resourceRoutes);
app.use('/tournament', tournamentRoutes);

//handling errors 
app.use((req,res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            test: "worked",
            message: error.message
        }
    });
});

module.exports = app; 