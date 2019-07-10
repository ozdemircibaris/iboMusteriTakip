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
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                len: [2, 250],
            }
        },
        nextSeans: {
            type: Sequelize.DATE,
            allowNull: false,
        },
        seansPrice: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    },
    {
        freezeTableName: true
    })
    return SeansModel;
}