const Banzuke_line = require('../../database/model/Banzuke_line')
const Result = require('../../database/model/Result')
const Sequelize = require('sequelize')

// QueryHelper to hold functions for queries outside the endpoint
const banzukeQuery = (id) => {
    return new Promise((resolve, reject) => {
        Banzuke_line.findAll({
            attributes:{
                //excludes the wrestler_id becaue we do not need it. 
                exclude: ['wrestler_id']
            },
            include: [{
                model: Result,
                attributes: [
                    'win',
                    'loss', 
                    'absence', 
                    'draw_hold', 
                    'champion', 
                    'runner_up',
                    'fighting_spirit',
                    'outstanding_performance',
                    'technique',
                    'playoff_bout' 
                ], 
                on: {
                    banzuke_id: Sequelize.where(Sequelize.col("banzuke_line.banzuke_id"), "=", Sequelize.col("result_table.banzuke_id")),
                    wrestler_id: Sequelize.where(Sequelize.col("banzuke_line.wrestler_id"), "=", Sequelize.col("result_table.wrestler_id"))
                }
            }],
            where: {
                banzuke_id: id 
            },
            raw: true 
        })
        .then(data => {
            if (!Array.isArray(data) || !data.length) {
                reject({
                    message: "array is empty"
                })
            }
            else {
                resolve(data) 
            }
        })
        .catch(err => { 
            console.log('error: ', err)
            reject({message: "an error has occurred during the query"})
        })
    })

} 

exports.banzukeQuery = banzukeQuery;