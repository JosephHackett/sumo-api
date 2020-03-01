const express = require('express');
const router = express.Router();
const morgan = require('morgan');
const Wrestler = require('../database/model/Wrestler')
const Result = require('../database/model/Result')
const banzuke_line = require('../database/model/Banzuke_line')
const Sequelize = require('sequelize')


router.get('/', (req,res,next) =>{
    res.status(200).json({
        message: "Should this return all rikishi indexes?"
    })
});

router.get('/profile/:rikishiId', (req,res,next) => {
    const id = req.params.rikishiId;
    Wrestler.findByPk(id, {raw: true})
    .then(rikishi => {

        // only get ranking lines if wrestler exists 
        banzuke_line.findAll({
            attributes:{
                //excludes the wrestler_id becaue we do not need it. 
                exclude: ['wrestler_id']
            },
            include: [{
                model: Result,
                attributes: ['win', 
                    'loss', 
                    'abscence', 
                    'draw_hold', 
                    'champion', 
                    'runner_up',
                    'fighting_spirit',
                    'outstanding_performance',
                    'technique',
                    'playoff_bout' 
                ], 
                where: {
                    wrestler_id: Sequelize.col('banzuke_line.wrestler_id'),
                    banzuke_id: Sequelize.col('banzuke_line.banzuke_id')
                }
            }],
            where: {
                wrestler_id: id
            },
            raw: true 
        })
        .then(results => {
            res.status(200).json({
                rikishi: rikishi,
                results: results 
            })
            
        })
        .catch( err => {
            console.log('error: ', err)
            res.status(500).json({message: 'An error has occurred'})
        })
    })
    .catch( err => console.log('error:', err))
});

module.exports = router; 
