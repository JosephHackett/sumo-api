const Sequelize = require('sequelize')
const db = require('../db')

const wrestler = db.define(
     'wrestler', {
    //atributes
        wrestler_id: {
            type: Sequelize.INTEGER,
            allowNull: false, 
            primaryKey: true
        },
        wname: {
            type: Sequelize.STRING,
            allowNull: false
        }, 
        highest_rank: {
            type: Sequelize.STRING,
        },
        stable: { 
            type: Sequelize.STRING,
            allowNull: false
        },
        height: 
        {
            type: Sequelize.DOUBLE
        },
        weight: {
            type: Sequelize.DOUBLE
        },
        kanji: {
            type: Sequelize.STRING,
            allowNull: false 
        }, 
        dob: {
            type: Sequelize.DATEONLY,
            allowNull: false
        },
    },
    {
        timestamps: false, 
        freezeTableName: true, 
        tableName: 'wrestler'
    }
    
    )

module.exports = wrestler