let express = require('express');
let router = express.Router();
const models = require('../models')

router.get('/', (req, res)=>{
  models.Subject.findAll()
    .then(data_subjects => {
      res.render('subjects', {data_subjects: data_subjects})
      // res.send(data_subjects)
    })
  // res.render('/teachers')
  // res.send('subjects')
})

module.exports = router
