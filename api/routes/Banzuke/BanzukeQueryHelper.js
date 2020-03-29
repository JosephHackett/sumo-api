const WrestlerResults = require("../../database/model/views/WrestlerResults");
const CurrentMakuuchiBanzuke = require("../../database/model/views/mView.currentMakuuchiBanzuke");
const CurrentJuryoBanzuke = require("../../database/model/views/mView.currentJuryoBanzuke");
const CurrentBasho = require("../../database/model/views/currentBasho")
const Sequelize = require('sequelize')
const Operator = Sequelize.Op
const Basho = require("../../database/model/Basho");

// QueryHelper to hold functions for queries outside the endpoint
const banzukeQueryById = (id) => {
    return new Promise((resolve, reject) => {
        Basho.findByPk(id, {raw:true})
        .then( basho => {
            // makuuchi listings 
            WrestlerResults.findAll({where:{banzuke_id: id, division: 1}, raw:true})
            .then (makuuchiBanzuke => {
                // Juryo listings 
                WrestlerResults.findAll({where:{banzuke_id: id, division: 2}, raw:true})
                .then(juryoBanzuke => {
                    resolve({basho, makuuchiBanzuke, juryoBanzuke});
                })
            })
        })
        .catch(err => { reject(err)})   
    })
} 

const currentBanzukeQuery = () => {
    return new Promise ((resolve, reject) => {
        // first query for current basho (tournament)
        CurrentBasho.findAll({raw:true})
        .then(basho => {
            CurrentMakuuchiBanzuke.findAll({raw:true})
            .then(makuuchiBanzuke => {
                CurrentJuryoBanzuke.findAll({raw:true})
                .then(juryoBanzuke => {
                    resolve({basho, makuuchiBanzuke, juryoBanzuke});
                })
            })
        })
        .catch(err => {reject(err)});
    });
}


exports.banzukeQueryById = banzukeQueryById;
exports.currentBanzukeQuery = currentBanzukeQuery;