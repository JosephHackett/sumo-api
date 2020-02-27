const Sequelize = require('sequelize')
const dataaccess = require('../dataaccess');

const result = dataaccess.define(
    'result_table',
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
        win: {
            type:Sequelize.INTEGER,
            allowNull: false, 
            defaultValue: 0
        }, 
        loss: {
            type:Sequelize.INTEGER,
            allowNull: false, 
            defaultValue: 0 
        },
        absence: {
            type:Sequelize.INTEGER,
            allowNull: false, 
            defaultValue: 0
        },
        draw_hold: {
            type:Sequelize.INTEGER,
            allowNull: false, 
            defaultValue: 0
        },
        champion: {
            type: Sequelize.BOOLEAN,
            allowNull: false, 
            defaultValue: false
        },
        runner_up: {
            type: Sequelize.BOOLEAN,
            allowNull: false, 
            defaultValue: false
        },
        fighting_spirit: {
            type: Sequelize.BOOLEAN,
            allowNull: false, 
            defaultValue: false
        }, 
        outstanding_performance: {
            type: Sequelize.BOOLEAN,
            allowNull: false, 
            defaultValue: false
        },
        technique: {
            type: Sequelize.BOOLEAN,
            allowNull: false, 
            defaultValue: false
        },
        playoff_bout: {
            type: Sequelize.BOOLEAN,
            allowNull: false, 
            defaultValue: false
        }

    },
    {
        timestamps: false, 
        freezeTableName: true, 
        tableName: 'result_table'  
    }
)

module.exports = result

