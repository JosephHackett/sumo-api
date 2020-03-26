const express = require('express');
const router = express.Router();
const BanzukeQueryHelper = require('./BanzukeQueryHelper')

router.get('/',(req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /banzuke. and ID of ' + banID + ' was received.'
    });
});

router.get("/current", (req,res,next) => {
   BanzukeQueryHelper.currentBanzukeQuery()
   .then(basho => {res.status(200).json(basho)})
   .catch(err => {console.log(err)});
});

router.get('/:banzuke_id', (req, res, next) => {
    const id = req.params.banzuke_id; 
    BanzukeQueryHelper.banzukeQuery(id)
    .then((data) => {
        res.status(200).json({banzuke: data})
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({
            message: 'An internal error has occurred.'
        })
    })
    
});

module.exports = router;