const express = require('express');
const router = express.Router();
const morgan = require('morgan');
const Wrestler = require('../database/model/Wrestler');
const Result = require('../database/model/Result')

router.get('/', (req,res,next) =>{
    res.status(200).json({
        message: "Should this return all rikishi indexes?"
    })
});

router.get('/:rikishiId', (req,res,next) => {
    const id = req.params.rikishiId;
    Wrestler.findByPk(id)
    .then(rikishi => {
        res.status(200).json(rikishi.dataValues);
    })
    .catch( err => console.log('error:', err))
});
 router.get('/results/:rikishiId', (req, res, next) => {
    const id = req.params.rikishiId;
    Result.findAll({
         raw: true, 
         where: {wrestler_id: id}
     })
     .then(results => {
         res.status(200).json(results)
     })
     .catch( err => {
         console.log('error: ', err)
         res.status(404).json({
             message: 'could not find results'
         })
     })
 })


module.exports = router; 
