const express    = require('express');
const router     = express.Router();
const bodyParser = require('body-parser');
const _          = require('underscore');
const db         = require('../db');
/* GET users listing. */

router.use(bodyParser.json())

router.get('/', (req, res, next) => {
    db.PaymentModel.findAll().then((payment) => {
    res.json(payment);
  })
});

router.get('/:id', (req, res, next) => {
  let paymentId = req.params.id;
  db.PaymentModel.findOne({
    where: {
      id: paymentId
    }
  }).then((payment) => {
    res.json(payment);
  })
});


router.post('/', (req, res, next) => {
  let body = _.pick(req.body, "paymentMethod");
  db.PaymentModel.create(body).then((user) => {
    res.json(user.toJSON());
  }, (e) => {
    return res.status(500)
  })
})

router.put('/:id', (req, res, next) => {
  let paymentId  = req.params.id;
  let body       = _.pick(req.body, "paymentMethod");
  let attributes = {};

  if(body.hasOwnProperty("paymentMethod")){
        attributes.ad = body.ad;
    }

  db.PaymentModel.findOne({
      where: {
          id: paymentId
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
  let paymentId = req.params.id;
  db.PaymentModel.destroy({
    where: {
      id: paymentId
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
