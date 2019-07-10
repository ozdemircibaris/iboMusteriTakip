module.exports = (sequelize, Sequelize) => {
    const SeansModel = sequelize.define('seansModel', {
        description: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        seansDate: {
            type: Sequelize.DATE,
            allowNull: false,
        },
        count: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        nextSeans: {
            type: Sequelize.DATE,
            allowNull: false,
        },
        seansPrice: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        seansPaid: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        userId: {
            type: Sequelize.INTEGER
        },
        paymentId: {
            type: Sequelize.INTEGER
        }
    },
    {
        freezeTableName: true
    })
    return SeansModel;
}