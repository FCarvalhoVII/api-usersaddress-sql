const { Model, DataTypes } = require('sequelize')

class Address extends Model {
    static init(connection) {
        super.init({
            zipzode: DataTypes.STRING,
            street: DataTypes.STRING,
            number: DataTypes.INTEGER
        }, {
            sequelize: connection
        })
    }

    static associate(models) {
        this.belongsTo(model.User, { foreignKey: 'user_id', as: 'user' })
    }
}

module.exports = Address