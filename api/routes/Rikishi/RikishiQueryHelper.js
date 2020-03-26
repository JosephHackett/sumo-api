const Wrestler = require('../../database/model/Wrestler');
const Result = require('../../database/model/Result');
const WrestlerResults = require('../../database/model/views/WrestlerResults');
const banzuke_line = require('../../database/model/Banzuke_line');
const Sequelize = require('sequelize');
const Operator = Sequelize.Op;

const profileQuery = (id) => {
    return new Promise ((resolve, reject) => {
        Wrestler.findByPk(id, { attributes: {exclude:['height', 'weight']},raw: true})
        .then(rikishi => {
            if (!rikishi) {
                reject('rikishi could not be located.')
            }
            else {
               resolve(rikishi);
            }
        })
        .catch( err => {
            console.log('error:', err)
            reject("An error has occurred.")
        })
    })
}

const rikishiSearch = (name) =>{
    return new Promise ((resolve, reject) => {
        Wrestler.findAll({
            attributes:['wrestler_id', 'wname', 'highest_rank', 'dob'],
            where: {
                wname: {[Operator.startsWith]: name}
            }, 
            raw: true 
        })
        .then(results => {
            resolve(results)
        })
        .catch(err => {
            reject("An error has occured")
        })
    })
}

const getResultsById = (id) =>{
    return new Promise ((resolve, reject) => {
        WrestlerResults.findAll({
            where: {wrestler_id: id},
            raw: true
        })
        .then(data => {
            resolve(data)
        })
        .catch(err =>{
            console.log('error: ', err)
            reject(err)
        })

    });
}

exports.profileQuery = profileQuery;
exports.rikishiSearch = rikishiSearch;
exports.getResultsById = getResultsById;