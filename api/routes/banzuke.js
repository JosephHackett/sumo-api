const express = require('express');
const router = express.Router();
const Wrestler = require('../database/model/Wrestler');
const Result = require('../database/model/Result');

router.get('/',(req, res, next) => {

    
    res.status(200).json({
        message: 'Handling GET requests to /banzuke. and ID of ' + banID + ' was received.'
    });
});


router.get('/:banzuke_id', (req, res, next) => {
    const id = req.params.banzuke_id; 
    if ( id === 'special') {
        res.status(200).json({
            message: 'you discovered the special ID',
            id: id
        });
    }
    else { 
        res.status(200).json({
            message: 'HA wrong ID buddy'
        });
    }
});

module.exports = router;