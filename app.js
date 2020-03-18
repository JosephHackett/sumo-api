const express = require('express');
const app = express(); 
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const banzukeRoutes = require('./api/routes/Banzuke/banzuke');
const rikishiRoutes = require('./api/routes/Rikishi/rikishi');

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//CORS error handling. 

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', '*');
//     if (req.method === 'OPTIONS'){
//         res.header('Access-Control-Allow-Methods', 'GET');
//         return res.status(200).json({});
//     }
//     next();
// });

//routes that handle requests
app.use('/banzuke', banzukeRoutes);
app.use('/rikishi', rikishiRoutes);

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
            message: error.message
        }
    });
});

module.exports = app; 