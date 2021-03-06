module.exports = (sequelize, Sequelize) => {
    const UserModel = sequelize.define('userModel', {
        ad: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        phone: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        address: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        userBalance: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    },
    {
        freezeTableName: true
    })
    return UserModel;
}