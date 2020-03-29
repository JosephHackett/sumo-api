const Sequelize = require('sequelize');
const db = require("../../database/db");
const Operator = Sequelize.Op;

const getTournamentsByYear = (year) => {
    return new Promise ((resolve, reject) => {
        db.query("SELECT basho_id, basho_name FROM basho WHERE date_part('year', end_date ) = " + String(year), {type: Sequelize.QueryTypes.SELECT})
        .then(results => {
            console.log(results)
            if (results.length > 0){
                resolve(results)
            }
        }) 
    }) 
}

exports.getTournamentsByYear = getTournamentsByYear;