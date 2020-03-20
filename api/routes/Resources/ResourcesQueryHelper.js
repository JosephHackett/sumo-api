const Kimarite = require('../../database/model/Kimarite');
const Sequelize = require('sequelize');

const getAllKimarite = () => {
    return new Promise( (resolve, reject) => {
        Kimarite.findAll({raw: true})
        .then(data => {
            resolve(data)
        })
        .catch(err => {
            console.log(err)
            reject("an Error has occurred")
        });
        
    });
}

exports.getAllKimarite = getAllKimarite;