const express    = require('express');
const router     = express.Router();
const bodyParser = require('body-parser');
const _          = require('underscore');
const db         = require('../db');
/* GET users listing. */

router.use(bodyParser.json())

router.get('/', (req, res, next) => {
    db.UserModel.findAll().then((users) => {
    res.json(users);
  })
});

router.get('/:id', (req, res, next) => {
  let userId = req.params.id;
  db.UserModel.findOne({
    where: {
      id: userId
    }
  }).then((users) => {
    res.json(users);
  })
});


router.post('/', (req, res, next) => {
  let body = _.pick(req.body, "ad", "phone", "address", "userBalance");
  db.UserModel.create(body).then((user) => {
    res.json(user.toJSON());
  }, (e) => {
    return res.status(500)
  })
})

router.put('/:id', (req, res, next) => {
  let userId     = req.params.id;
  let body       = _.pick(req.body, "ad", "phone", "address", "userBalance");
  let attributes = {};

  if(body.hasOwnProperty("ad")){
      attributes.ad = body.ad;
  }
  if(body.hasOwnProperty("phone")){
      attributes.phone = body.phone;
  }
  if(body.hasOwnProperty("address")){
    attributes.address = body.address;
}
  if(body.hasOwnProperty("userBalance")){              // istediğin alanı istediğin gibi güncelle
      attributes.userBalance = body.userBalance;
  }

  db.UserModel.findOne({
      where: {
          id: userId
      }
  }).then((user) => {
      if(user){
          user.update(attributes).then((user) => {
              res.json(user.toJSON());
          }, () => {
              res.status(400).send();  // bad data
          })
      } else {
          res.status(404).send({
              error: 'Aradığınız kullanıcı bulunamadı.'
          });
      }
  }, () => {
      res.status(500).send(); // server error
  })
})

router.delete('/:id', (req, res, next) => {
  let userId = req.params.id;
  db.UserModel.destroy({
    where: {
      id: userId
    }
  }).then((rowDeleted) => {
    if(rowDeleted === 0){
      res.status(404).send({
        error: 'Silmek istediğiniz kayıt bulunamadı.'
      })
    } else {
      res.status(204).send(); // process successful but no content:)
    }
  }, () => {
    res.status(500).send();
  })
})


module.exports = router;
