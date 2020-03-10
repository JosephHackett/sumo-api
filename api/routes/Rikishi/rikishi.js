const express = require('express');
const router = express.Router();
const RikishiQueryHelper = require('./RikishiQueryHelper')


router.get('/', (req,res,next) =>{
    res.status(200).json({
        message: "Should this return all rikishi indexes?"
    })
});

router.get('/profile/:rikishiId', (req,res,next) => {
    const id = req.params.rikishiId;
    RikishiQueryHelper.profileQuery(id)
    .then( data => {
        res.status(200).json(data)
    })
    .catch(err => {
        res.status(404).json({
            message: 'profile could not be found.'
        })
    })
});

module.exports = router; 
