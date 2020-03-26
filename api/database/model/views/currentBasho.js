const Sequelize = require('sequelize');
const db = require('../../db');

const CurrentBasho = db.define(
    "current_basho",
    {
        basho_id: {
            type: Sequelize.NUMBER,
            allowNull: false,
            primaryKey: true
        },
        basho_name: {
            type: Sequelize.STRING,
            allowNull: false, 
        },
        start_date: {
            type: Sequelize.STRING, 
        }, 
        end_date: {
            type: Sequelize.STRING
        }
    },
    {
        timestamps: false, 
        freezeTableName: true, 
        tableName: 'current_basho'
    }
)

module.exports = CurrentBasho;