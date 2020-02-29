const Sequelize = require('sequelize')
const dataaccess = require('../dataaccess');

const banzuke_line = dataaccess.define(
    'banzuke_line',
    {
        banzuke_id: {
            type: Sequelize.INTEGER,
            allowNull: false, 
            primaryKey: true
        },
        wrestler_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
        },
        rank: {
            type: Sequelize.STRING,
            allowNull: false
        }, 
        wname: {
            type: Sequelize.STRING,
            allowNull: false
        },
        stable: {
            type: Sequelize.STRING,
            allowNull: false
        }, 
        kanji: {
            type: Sequelize.STRING,
            allowNull: false
        },
        rank_debut: {
            type: Sequelize.BOOLEAN,
            allowNull: false, 
            defaultValue: false
        }
    },
    {
        timestamps: false, 
        freezeTableName: true, 
        tableName: 'banzuke_line'
    })

module.exports = banzuke_line;