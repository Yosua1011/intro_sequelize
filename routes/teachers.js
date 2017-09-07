let express = require('express');
let router = express.Router();
const models = require('../models')

router.get('/', (req, res)=>{
  models.Teacher.findAll()
    .then(data_teachers => {
      res.render('teachers',{data_teachers : data_teachers})
      // res.send(data_teachers)
    })
    .catch(err => {
      console.log(err);
    })
  // res.render('/teachers')
  // res.send('teachers')
})

module.exports = router
