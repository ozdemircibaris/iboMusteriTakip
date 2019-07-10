module.exports = (sequelize, Sequelize) => {
    const PaymentModel = sequelize.define('paymentModel', {
        paymentMethod: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    },
    {
        freezeTableName: true
    })
    return PaymentModel;
}