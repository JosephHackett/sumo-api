const Wrestler = require('../../database/model/Wrestler')
const Result = require('../../database/model/Result')
const banzuke_line = require('../../database/model/Banzuke_line')
const Sequelize = require('sequelize')

const profileQuery = (id) => {
    return new Promise ((resolve, reject) => {
        Wrestler.findByPk(id, {raw: true})
        .then(rikishi => {
            if (!rikishi) {
                reject('rikishi could not be located.')
            }
            // only get ranking lines if wrestler exists 
            else {
                banzuke_line.findAll({
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
                        wrestler_id: id
                    },
                    raw: true 
                })
                .then(results => { 
                resolve({
                    rikishi: rikishi,
                    results: results 
                })
                })
                .catch( err => {
                resolve({
                    rikishi: rikishi
                })
                })
            }
        })
        .catch( err => {
            console.log('error:', err)
            reject("the rikishi does not exist")
        })
    })
}

exports.profileQuery = profileQuery