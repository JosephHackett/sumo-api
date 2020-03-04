const express = require('express');
const router = express.Router();
const BanzukeQueryHelper = require('./BanzukeQueryHelper')

router.get('/',(req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /banzuke. and ID of ' + banID + ' was received.'
    });
});

router.get('/:banzuke_id', (req, res, next) => {
    const id = req.params.banzuke_id; 
    BanzukeQueryHelper.banzukeQuery(id)
    .then((data) => {
        res.status(200).json({data})
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({
            message: 'An internal error has occurred.'
        })
    })
    
});

module.exports = router;