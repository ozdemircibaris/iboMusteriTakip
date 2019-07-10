const express    = require('express');
const router     = express.Router();
const bodyParser = require('body-parser');
const _          = require('underscore');
const db         = require('../db');
/* GET seans listing. */

router.use(bodyParser.json())

router.get('/', (req, res, next) => {
    db.SeansModel.findAll().then((seans) => {
    res.json(seans);
  })
});

router.get('/:id', (req, res, next) => {
  let userId = req.params.id;
  db.SeansModel.findOne({
    where: {
      id: userId
    }
  }).then((seans) => {
    res.json(seans);
  })
});


router.post('/', (req, res, next) => {
  let body = _.pick(req.body, "description", "seansDate", "count", "nextSeans", "seansPrice", "userId", "paymentId");
  db.SeansModel.create(body).then((user) => {
    res.json(user.toJSON());
  }, (e) => {
    return res.status(500)
  })
})

router.put('/:id', (req, res, next) => {
  let seansId     = req.params.id;
  let body       = _.pick(req.body, "description", "seansDate", "count", "nextSeans", "seansPrice", "userId", "paymentId");
  let attributes = {};

  if(body.hasOwnProperty("description")){
      attributes.description = body.description;
  }
  if(body.hasOwnProperty("seansDate")){
      attributes.seansDate = body.seansDate;
  }
  if(body.hasOwnProperty("count")){
    attributes.count = body.count;
  }
  if(body.hasOwnProperty("nextSeans")){              // istediğin alanı istediğin gibi güncelle
      attributes.nextSeans = body.nextSeans;
  }
  if(body.hasOwnProperty("seansPrice")){              // istediğin alanı istediğin gibi güncelle
    attributes.seansPrice = body.seansPrice;
  }
  if(body.hasOwnProperty("userId")){              // istediğin alanı istediğin gibi güncelle
    attributes.userId = body.userId;
  }
  if(body.hasOwnProperty("paymentId")){              // istediğin alanı istediğin gibi güncelle
    attributes.paymentId = body.paymentId;
  }

  db.SeansModel.findOne({
      where: {
          id: seansId
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
  db.SeansModel.destroy({
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
