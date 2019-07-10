const express = require('express');
const router = express.Router();
const db = require('../db');


db.sequelize.sync({force: false}).then(() => {
  console.log('DB bağlandı.')
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('index Page')
});

module.exports = router;
