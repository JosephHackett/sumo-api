const Sequelize = require('sequelize');
const db = require('../../db');

const WrestlerResults = db.define(
    "wrestler_results",
    {
        banzuke_id: {
            type: Sequelize.INTEGER, 
            allowNull: false, 
            primaryKey: true
        },
        basho_name: {
            type: Sequelize.STRING,
            allowNull: false
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
        tableName: 'basho_results_by_wrestler'
    }

)

module.exports = WrestlerResults;