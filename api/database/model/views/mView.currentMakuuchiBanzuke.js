const Sequelize = require('sequelize');
const db = require('../../db');

const currentMakuuchiBanzuke = db.define(
    "current_m_banzuke",
    {
        banzuke_id: {
            type: Sequelize.INTEGER, 
            allowNull: false, 
            primaryKey: true
        },
        wrestler_id: {
            type: Sequelize.INTEGER, 
            allowNull: false, 
            primaryKey: true
        },
        wname: {
            type: Sequelize.STRING, 
            allowNull: false
        },
        rank: {
            type: Sequelize.STRING,
            allowNull: false
        },
        win: {
            type: Sequelize.INTEGER, 
            allowNull: false
        },
        loss: {
            type: Sequelize.INTEGER, 
            allowNull: false
        },
        absence: {
            type: Sequelize.INTEGER, 
            allowNull: false
        },
        draw_hold: {
            type: Sequelize.INTEGER, 
            allowNull: false
        },
        champion: {
            type: Sequelize.BOOLEAN, 
            allowNull: false
        },
        runner_up: {
            type: Sequelize.BOOLEAN, 
            allowNull: false
        },
        fighting_spirit: {
            type: Sequelize.BOOLEAN, 
            allowNull: false
        },
        outstanding_performance: {
            type: Sequelize.BOOLEAN, 
            allowNull: false
        },
        technique: {
            type: Sequelize.BOOLEAN, 
            allowNull: false
        },
        playoff_bout: {
            type: Sequelize.BOOLEAN, 
            allowNull: false
        }

    },
    {
        timestamps: false, 
        freezeTableName: true, 
        tableName: 'current_m_banzuke'
    }
)

module.exports = currentMakuuchiBanzuke;