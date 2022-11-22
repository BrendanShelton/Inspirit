const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class UserSaved extends Model {}

UserSaved. init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
        quote_id: {
            type: DataTypes.INTEGER,
            references: {
            model: 'quote',
            key: 'id',
            unique: false
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
            model: 'user',
            key: 'id',
            unique: false
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'userSaved',
    }
);

module.exports = UserSaved;