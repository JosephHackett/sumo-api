const Sequelize = require('sequelize')
const db = require('../db')

const kimarite = db.define(
    'kimarite',
    {
        kimarite_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        kname: {
            type: Sequelize.STRING,
            allowNull: false 
        }, 
        description: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        kanji: {
            type: Sequelize.STRING, 
            allowNull: false
        },
        engliteral: {
            type: Sequelize.STRING,
            allowNull: false 
        }
    },
    {
        timestamps: false, 
        freezeTableName: true, 
        tableName: 'kimarite'
    }
)

module.exports = kimarite