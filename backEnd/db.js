const Sequelize = require('sequelize');
const sequelize = new Sequelize("iboMusteriTakip", "root", "1337", {
    host: 'localhost',
    dialect: 'mysql'
});

const db = {};
db.UserModel    = sequelize.import(__dirname + '/models/userModel.js');
db.SeansModel   = sequelize.import(__dirname + '/models/seansModel.js');
db.PaymentModel = sequelize.import(__dirname + '/models/paymentModel.js');
db.sequelize    = sequelize;
db.Sequelize    = Sequelize;

module.exports = db;