const Sequelize = require('sequelize')
const dataaccess = require('../dataaccess')


const bout = dataaccess.define(
    "bout", 
    {
        banzuke_id: {
            type: Sequelize.INTEGER, 
            allowNull: false, 
            primaryKey: true 
        },
        day_id: {
            type: Sequelize.INTEGER,
            allowNull: false, 
            primaryKey: true 
        },
        bout_num: {
            type: Sequelize.INTEGER,
            allowNull: false, 
            primaryKey: true 
        },
        east_wrestler_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        west_wreslter_id: {
            type: Sequelize.INTEGER,
            allowNull: false 
        },
        east_win: {
            type: Sequelize.BOOLEAN, 
        },
        west_win: {
            type: Sequelize.BOOLEAN
        },
        kimarite_id: {
            type: Sequelize.INTEGER
        }
    },
    {
        timestamps: false, 
        freezeTableName: true, 
        tableName: 'bout'
    }
)

module.exports = bout