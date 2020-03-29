const Sequelize = require('sequelize');
const db = require('../db');

const Basho = db.define(
    "basho",
    {
        basho_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        basho_name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        start_date: {
            type: Sequelize.DATEONLY, 
            allowNull: false 
        },
        end_date: {
            type: Sequelize.DATEONLY, 
            allowNull: false 
        }
    },
    {
        timestamps: false, 
        freezeTableName: true, 
        tableName: 'basho'
    }
);

module.exports = Basho;